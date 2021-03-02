import React, { Component } from 'react';
import { MapViewStyles } from './MapViewStyles';

class MapView extends Component {
  map;
  mapScript = () => {
    const { mapBoards } = this.props;
    let container = document.querySelector(".mapViewer")
    let position = new window.kakao.maps.LatLng(37.572602860810186, 126.97691639601517);
    if(mapBoards.length > 0) {
      position = new window.kakao.maps.LatLng(mapBoards[mapBoards.length -1].lating.y, mapBoards[mapBoards.length -1].lating.x)
    }
    let options = {
      center: position,
      level: 3
    }

    this.map = new window.kakao.maps.Map(container, options);
    this.setBound()
    this.displayMarker()
  }
  setBound = () => {
    const { mapBoards } = this.props;
    let bounds = new window.kakao.maps.LatLngBounds();
    for(let i = 0; i < mapBoards.length; i++) {
      bounds.extend(new window.kakao.maps.LatLng(mapBoards[i].lating.y,mapBoards[i].lating.x))
    }
    this.map.setBounds(bounds)
  }
  displayMarker = () => {
    const { mapBoards } = this.props;
    mapBoards.forEach((boardItem) => {
      let marker = new window.kakao.maps.Marker({
        map: this.map,
        position: new window.kakao.maps.LatLng(boardItem.lating.y, boardItem.lating.x)
      })
      marker.setMap(null)
      let overlayCont = document.createElement('div')
      overlayCont.className = 'marker_cont'

      const overlay = new window.kakao.maps.CustomOverlay({
        content: overlayCont,
        map: this.map,
        position: marker.getPosition()
      });
    })
  }
  
  componentDidMount() {
    this.mapScript();
  }
  componentDidUpdate() {
    this.mapScript();
  }

  render() {
    return (
      <MapViewStyles>
        <div className="mapViewer"></div>
      </MapViewStyles>
    );
  }
}

export default MapView;