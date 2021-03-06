import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {getMapBoards } from 'modules/map';
import { MapContStyles, MapWrapStyles } from './MapStyles';
import MapBoards from '../../Components/MapBoards';
import MapView from '../../Components/MapView';
import { getMapBoardsDB } from 'Utils/utils';
import MapSearch from 'Components/MapSearch';
import BoardDetail from 'Components/BoardDetail';
import { fBaseDB } from 'Apis/fBase';

const Container = (props) => {
  const { map, getMapBoards, userObject } = props
  const { mapBoards } = map
  const [keyword, setKeyword] = useState("")
  const [searchKeyword, setSearchKeyword] = useState([])
  const [detailItem, setDetailItem] = useState(null)

  useEffect(() => {
    const fetchMapBoards = async () => {
      const fetchedDB = await getMapBoardsDB()
      getMapBoards(fetchedDB)
    }
    fBaseDB.collection("mapBoards").onSnapshot(() => fetchMapBoards())
  }, [getMapBoards])

  const changeKeyword = e => setKeyword(e.target.value)
  const filterToKeyword = e => {
    e.preventDefault()
    const filtered = mapBoards.filter(board => board.title.indexOf(keyword) > -1 && board)
    setSearchKeyword(filtered)
  }
  const handleDetailItem = item => setDetailItem(item)

  return (
    <MapWrapStyles>
      <MapContStyles>
        <MapSearch
          keyword={keyword}
          changeKeyword={changeKeyword}
          filterToKeyword={filterToKeyword}
        />
        <MapBoards
          mapBoards={searchKeyword.length > 0 ? searchKeyword : mapBoards}
          handleDetailItem={handleDetailItem}
        />
      </MapContStyles>
      {
        detailItem &&
        <BoardDetail
          userId={userObject.uid}
          detailItem={detailItem}
          handleDetailItem={handleDetailItem}
        />
      }
      <MapView
        mapBoards={mapBoards}
      />
    </MapWrapStyles>
  );
};

const mapStateToProps = state => ({
  userObject: state.user.userinfo,
  map: state.map
})

const mapDispatchToProps = dispatch => ({
  getMapBoards: (mapBoards) => dispatch(getMapBoards(mapBoards)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)