import React, { Component } from 'react';
import { MapViewStyles } from './MapViewStyles';

class MapView extends Component {
  map;
  mapScript = () => {
    const container = document.querySelector(".mapViewer")
    const position = new window.kakao.maps.LatLng(37.572602860810186, 126.97691639601517) // default 광화문광장
    const options = {
      center: position,
      level: 3
    }

    this.map = new window.kakao.maps.Map(container, options);
    this.setBound() // 위치값 재설정
    this.displayMarker() // 커스텀 오버레이 그리기
  }
  setBound = () => {
    const { mapBoards } = this.props;
    const bounds = new window.kakao.maps.LatLngBounds();
    for(let i = 0; i < mapBoards.length; i++) {
      bounds.extend(new window.kakao.maps.LatLng(mapBoards[i].lating.y,mapBoards[i].lating.x))
    }
    this.map.setBounds(bounds)
  }
  displayMarker = () => {
    const { mapBoards } = this.props;
    mapBoards.forEach((boardItem) => {
      const marker = new window.kakao.maps.Marker({
        map: this.map,
        position: new window.kakao.maps.LatLng(boardItem.lating.y, boardItem.lating.x)
      })
      marker.setMap(null)
      const overlayCont = document.createElement('div')
      const overlayInner = `<div class="inner">
        <table>
          <caption class="hide">${boardItem.title}</caption>
          <colgroup>
            <col style="width:20%"/>
            <col style="width:80%"/>
          </colgroup>
          <tbody>
            <tr>
              <th>장소</th>
              <td>${boardItem.place}</td>
            </tr>
            <tr>
              <th>주소</th>
              <td>${boardItem.address}</td>
            </tr>
          </tbody>
        </table>
      </div>`
      overlayCont.className = 'marker_cont'
      overlayCont.innerHTML = overlayInner

      const overlay = new window.kakao.maps.CustomOverlay({
        content: overlayCont,
        map: this.map,
        position: marker.getPosition()
      });

      overlayCont.addEventListener('click', function() {
        overlayCont.classList.toggle('show')
      })
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