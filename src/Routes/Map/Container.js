import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getMapObject, getMapBoards } from 'reducers/map';
import { MapContStyles, MapWrapStyles } from './MapStyles';
import MapBoards from '../../Components/MapBoards';
import MapSearch from '../../Components/MapSearch';
import MapView from '../../Components/MapView';
import { kakoMapRender, placeSearchFunc } from 'Apis/kakao';

const Container = (props) => {
  const { map } = props
  const { mapObject, mapBoards } = map
  const [keyword, setKeyword] = useState("")
  const [keywordBoards, setKeywordBoards] = useState(null)
  
  useEffect(() => {
    const fetchKakaoMap = () => {
      const fetchObject = kakoMapRender(37.506502, 127.053617)
      console.log(fetchObject)
      getMapObject(fetchObject)
      // getMapBoards()
      placeSearchFunc(fetchObject, "서울역")
    }
    fetchKakaoMap()
  }, [mapObject])

  const changeKeyword = e => setKeyword(e.target.value)
  const filterToKeyword = (e) => {
    e.preventDefault();
    const filtered = mapBoards.filter((boardItem) => {
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
            boardsList={!keywordBoards ? mapBoards : keywordBoards}
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
  getMapObject: (mapObject) => dispatch(getMapObject(mapObject)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)