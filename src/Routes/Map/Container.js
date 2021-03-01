import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMapObject, getMapBoards } from 'modules/map';
import { MapContStyles, MapWrapStyles } from './MapStyles';
import MapBoards from '../../Components/MapBoards';
import MapView from '../../Components/MapView';
import { fetchKakaoMap } from '../../Apis/kakao'
import { fetchMapBoardsDB } from 'Utils/utils';

const Container = (props) => {
  const { map, getMapObject, getMapBoards } = props
  const { mapObject, mapBoards } = map

  useEffect(() => {
    const mapKakao = fetchKakaoMap()
    getMapObject(mapKakao)
    const fetchMapBoards = async () => {
      const fetchedDB = await fetchMapBoardsDB()
      getMapBoards(fetchedDB)
    }
    fetchMapBoards()
    
  }, [getMapObject, getMapBoards])

  return (
    <>
      <MapWrapStyles>
        <MapContStyles>
          <MapBoards
            mapObject={mapObject}
            boardsList={mapBoards}
          />
        </MapContStyles>
        <MapView
          mapObject={mapObject}
          mapBoards={mapBoards}
        />
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