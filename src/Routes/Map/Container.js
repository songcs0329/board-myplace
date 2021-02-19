import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getMapObject, getMapBoards } from 'reducers/map';
import { MapContStyles, MapWrapStyles } from './MapStyles';
import MapBoards from '../../Components/MapBoards';
import MapSearch from '../../Components/MapSearch';
import MapView from '../../Components/MapView';

const Container = (props) => {
  const { map } = props
  const [keyword, setKeyword] = useState("")
  const [keywordBoards, setKeywordBoards] = useState(null)
  
  useEffect(() => {
    const fetchKakaoMap = () => {
      getMapBoards()
      getMapObject(37.506502, 127.053617)
    }
    fetchKakaoMap()
  }, [])

  const changeKeyword = e => setKeyword(e.target.value)
  const filterToKeyword = (e) => {
    e.preventDefault();
    const filtered = map.mapBoards.filter((boardItem) => {
      return boardItem === keyword && boardItem 
    })
    console.log(filtered)
    setKeywordBoards(filtered)
  }

  return (
    <>
      <MapWrapStyles>
        <MapContStyles>
          <MapSearch 
            keyword={keyword}
            changeKeyword={changeKeyword}
            filterToKeyword={filterToKeyword}
          />
          <MapBoards
            boardsList={!keywordBoards ? map.mapBoards : keywordBoards}
          />
        </MapContStyles>
        <MapView />
      </MapWrapStyles>
    </>
  );
};

const mapStateToProps = state => ({
  map: state.map
})

const mapDispatchToProps = dispatch => ({
  getMapBoards: () => dispatch(getMapBoards()),
  getMapObject: (posX, posY) => dispatch(getMapObject(posX, posY)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)