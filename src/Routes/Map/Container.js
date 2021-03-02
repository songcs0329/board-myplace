import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {getMapBoards } from 'modules/map';
import { MapContStyles, MapWrapStyles } from './MapStyles';
import MapBoards from '../../Components/MapBoards';
import MapView from '../../Components/MapView';
import { fetchMapBoardsDB } from 'Utils/utils';
import MapSearch from 'Components/MapSearch';

const Container = (props) => {
  const { map, getMapBoards } = props
  const { mapBoards } = map
  const [keyword, setKeyword] = useState("")
  const [searchKeyword, setSearchKeyword] = useState([])

  useEffect(() => {
    const fetchMapBoards = async () => {
      const fetchedDB = await fetchMapBoardsDB()
      getMapBoards(fetchedDB)
    }
    fetchMapBoards()
    
  }, [getMapBoards])

  const changeKeyword = (e) => setKeyword(e.target.value)
  const filterToKeyword = (e) => {
    e.preventDefault()
    const filtering = mapBoards.filter(board => board.title.indexOf(keyword) > -1 && board)
    setSearchKeyword(filtering)
  }

  const fromItemToMap = (boardItem) => {
    console.log(boardItem)
  }

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
          fromItemToMap={fromItemToMap}
        />
      </MapContStyles>
      <MapView
        mapBoards={mapBoards}
      />
    </MapWrapStyles>
  );
};

const mapStateToProps = state => ({
  map: state.map
})

const mapDispatchToProps = dispatch => ({
  getMapBoards: (mapBoards) => dispatch(getMapBoards(mapBoards)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)