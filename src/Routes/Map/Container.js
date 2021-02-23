import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getMapObject, getMapBoards } from 'modules/map';
import { MapContStyles, MapWrapStyles } from './MapStyles';
import MapBoards from '../../Components/MapBoards';
import MapSearch from '../../Components/MapSearch';
import MapView from '../../Components/MapView';
import { kakoMapRender, placeSearchFunc } from 'Apis/kakao';
import { fBaseDB } from 'Apis/fBase';

const Container = (props) => {
  const { map, getMapObject, getMapBoards } = props
  const { mapBoards } = map
  const [keyword, setKeyword] = useState("")
  const [keywordBoards, setKeywordBoards] = useState(null)
  
  useEffect(() => {
    const fetchKakaoMap = () => {
      const kakaoMapObject = kakoMapRender(37.506502, 127.053617)
      getMapObject(kakaoMapObject)
      placeSearchFunc(kakaoMapObject, "서울역")
    }
    fetchKakaoMap()

    fBaseDB.collection("mapboard").onSnapshot(snapshot => {
      const boardArr = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      getMapBoards(boardArr)
    })
  }, [getMapObject, getMapBoards])

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
  getMapBoards: (mapBoards) => dispatch(getMapBoards(mapBoards)),
  getMapObject: (mapObject) => dispatch(getMapObject(mapObject)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)