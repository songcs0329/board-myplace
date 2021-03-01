import { placeSearchFunc } from 'Apis/kakao';
import MapView from 'Components/MapView';
import React, { useEffect } from 'react';
import { DetailStyles } from './detailStyles';

const Presenter = ({ mapObject, mapItem }) => {
  useEffect(() => {
    placeSearchFunc(mapObject, mapItem)
  }, [mapObject, mapItem])

  return (
    <DetailStyles>
      <MapView />
    </DetailStyles>
  );
};

export default Presenter;