/* global kakao */
const API_KEY = "ddc8047e68990154766c683f63e3c080";

export const kakaoMapScript = (posX, posY) => {
  const script = document.createElement("script")
  script.async = true
  script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${API_KEY}&autoload=false&libraries=services,clusterer,drawing`
  document.head.appendChild(script)

  script.onload = () => {
    kakao.maps.load(() => {
      let container = document.getElementById("map")
      let options = {
        center: new kakao.maps.LatLng(posX, posY),
        level: 7
      }

      const map = new kakao.maps.Map(container, options)
      return map
    })
  }
}
