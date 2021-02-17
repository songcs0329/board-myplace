/* global kakao */
export const mapRender = (posX, posY) => {
  let container = document.getElementById("map")
  let options = {
    center: new kakao.maps.LatLng(posX, posY),
    level: 7
  }

  const map = new kakao.maps.Map(container, options)
  const ps = new kakao.maps.services.Places()
  return {
    map,
    ps
  }
}

export const placeSearch = (mapObj, keyword, dispatchFunc) => {
  const { map, ps } = mapObj
  ps.keywordSearch(keyword, placesSearchCB)
  
  function placesSearchCB(data, status) {
    if (status === kakao.maps.services.Status.OK) {
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      const bounds = new kakao.maps.LatLngBounds()
      for (var i=0; i<data.length; i++) {
        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
      }    
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      map.setBounds(bounds)
    }
    
    dispatchFunc(data)
  }
}