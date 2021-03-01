import { getMapBoards, getMapObject } from 'modules/map';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMapBoardsDB } from 'Utils/utils';
import Presenter from './Presenter';

const Container = (props) => {
  const { map, getMapBoards } = props
  const { mapBoards } = map

  useEffect(() => {
    const fetchMapBoards = async () => {
      const mapBoardsDB = await fetchMapBoardsDB()
      getMapBoards(mapBoardsDB)
    }
    fetchMapBoards()
  }, [getMapBoards])

  return (
    <Presenter
      mapBoards={mapBoards}
    />
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