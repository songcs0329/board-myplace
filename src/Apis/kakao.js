/* global kakao */
import axios from 'axios'
import { getToday } from 'Utils/utils'

const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_KEY
const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com", // 공통 요청 경로를 지정해준다.
  headers: {
    Authorization: `KakaoAK ${REST_API_KEY}` // 공통으로 요청 할 헤더
  }
})

export const kakoMapRender = (posX, posY) => {
  const container = document.querySelector(".mapViewer")
  const options = {
    center: new kakao.maps.LatLng(posX, posY),
    level: 3
  }

  const map = new kakao.maps.Map(container, options)
  const ps = new kakao.maps.services.Places()
  return {
    map,
    ps,
  }
}

export const fetchKakaoMap = (board) => {
  const kakaoMapObject = kakoMapRender(37.572602860810186, 126.97691639601517) // 시작은 광화문광장
  const placeOptions = {
    title: "광화문 광장",
    place: "광화문 광장",
    address: "서울 종로구 세종로 1-68",
    date: getToday()
  }
  placeSearchFunc(kakaoMapObject, placeOptions)
  return kakaoMapObject
}


export const placeSearchFunc = (mapObject, board) => {
  if(mapObject) {
    const { map, ps } = mapObject
    const setPlaceSearchCB = (board) => {
      ps.keywordSearch(board.address, placesSearchCB)
      function placesSearchCB(data, status) {
        if (status === kakao.maps.services.Status.OK) {
          const position = new kakao.maps.LatLng(data[0].y, data[0].x)
          fetchLatingBound(map, position)
          setCustomOverlay(map, position, board)
        }
      }
    }
    setPlaceSearchCB(board)
  }
}

export const fetchLatingBound = (map, position) => {
  const bounds = new kakao.maps.LatLngBounds()
  bounds.extend(position)
  map.setBounds(bounds)
}

export const setCustomOverlay = (map, position, boardObject) => {
  const { title, place, address, date } = boardObject
  const content = `<div class="marker_cont">
    <strong>${title}</strong>
    <span>${date}</span>
    <dl>
      <dt>장소</dt>
      <dd>${place}</dd>
    </dl>
    <dl>
      <dt>주소</dt>
      <dd>${address}</dd>
    </dl>
  </div>`

  // 커스텀 오버레이를 생성합니다
  const customOverlay = new kakao.maps.CustomOverlay({
    map: map,
    position,
    content,
    yAnchor: 1 
  });
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