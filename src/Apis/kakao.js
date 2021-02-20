/* global kakao */
import axios from 'axios'

const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_KEY
const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com", // 공통 요청 경로를 지정해준다.
  headers: {
    Authorization: `KakaoAK ${REST_API_KEY}` // 공통으로 요청 할 헤더
  }
})

export const kakoMapRender = (posX, posY) => {
  let container = document.querySelector(".mapViewer")
  let options = {
    center: new kakao.maps.LatLng(posX, posY),
    level: 3
  }

  const map = new kakao.maps.Map(container, options)
  const ps = new kakao.maps.services.Places()
  return {
    map,
    ps
  }
}

export const placeSearchFunc = (mapObject, keyword) => {
  const { map, ps } = mapObject
  ps.keywordSearch(keyword, placesSearchCB)
  
  function placesSearchCB(data, status) {
    if (status === kakao.maps.services.Status.OK) {
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      const bounds = new kakao.maps.LatLngBounds()
      for (let i = 0; i < data.length; i++) {
        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
      }    
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      map.setBounds(bounds)
    }
    console.log(data)
  }
}

export const SearchQuery = async query => {
  const params = {
    query,
    sort: "accuracy", // accuracy | recency 정확도 or 최신
    page: 1, // 페이지번호
    size: 10 // 한 페이지에 보여 질 문서의 개수
  }

  const searched = await Kakao.get("/v2/local/search/keyword", {params})
  return searched.data
}