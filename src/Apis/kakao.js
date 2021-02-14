const API_KEY = "ddc8047e68990154766c683f63e3c080";

export const setMapScript = () => {
  const mapScript = document.createElement("script");
  mapScript.async = true;
  mapScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${API_KEY}&autoload=false`;
  document.head.appendChild(mapScript)
}

