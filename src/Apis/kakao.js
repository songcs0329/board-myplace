import axios from 'axios'

const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_KEY
const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com", // 공통 요청 경로를 지정해준다.
  headers: {
    Authorization: `KakaoAK ${REST_API_KEY}` // 공통으로 요청 할 헤더
  }
})

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