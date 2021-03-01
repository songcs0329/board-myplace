import { placeSearchFunc } from 'Apis/kakao';
import React, { useEffect } from 'react';
import { MapViewStyles } from './MapViewStyles';

const MapView = ({ mapObject, mapItem }) => {
  return (
    <MapViewStyles>
      <div className="mapViewer"></div>
    </MapViewStyles>
  );
};

export default MapView;