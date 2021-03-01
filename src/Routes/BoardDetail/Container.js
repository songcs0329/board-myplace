import { fetchKakaoMap, placeSearchFunc } from 'Apis/kakao';
import { Loading } from 'Components/default';
import { getMapItem, getMapObject } from 'modules/map';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMapItemDB } from 'Utils/utils';
import Presenter from './Presenter';

const Container = (props) => {
  const params = useParams()
  const { map, getMapObject, getMapItem } = props
  const { mapObject, mapItem } = map

  useEffect(() => {
    const fetchDetailItem = async () => {
      const mapItemDB = await fetchMapItemDB(params.boardId)
      getMapItem(mapItemDB)
    }
    fetchDetailItem()
    
    const mapKakao = fetchKakaoMap(mapItem)
    getMapObject(mapKakao)
  }, [params.boardId])

  return (
    <>
      <Presenter
        mapObject={mapObject}
        mapItem={mapItem}
      />
    </>
    
  );
};

const mapStateToProps = state => ({
  map: state.map
})

const mapDispatchToProps = dispatch => ({
  getMapItem: (mapItem) => dispatch(getMapItem(mapItem)),
  getMapObject: (mapObject) => dispatch(getMapObject(mapObject)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)