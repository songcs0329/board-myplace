import { mapRender, placeSearch } from 'Apis/kakao';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getMapObject, getSearchPlaceList } from 'reducers/map';
import Presenter from './Presenter';

const Container = (props) => {
  const [keyword, setKeyword] = useState("")
  const { map, getMapObject, getSearchPlaceList } = props
  const { mapObject, placeList } = map
  
  useEffect(() => {
    const fetchKakaoMap = () => {
      const kakaoMap = mapRender(37.506502, 127.053617)
      getMapObject(kakaoMap)
    }
    fetchKakaoMap()
  }, [getMapObject])

  const changeKeyword = e => setKeyword(e.target.value)
  const searchKeyword = (e) => {
    e.preventDefault();
    placeSearch(mapObject, keyword, getSearchPlaceList)
  }

  return (
    <Presenter
      keyword={keyword}
      // placeList={placeList}
      changeKeyword={changeKeyword}
      searchKeyword={searchKeyword}
    />
  );
};

const mapStateToProps = state => ({
  map: state.map
})

const mapDispatchToProps = dispatch => ({
  getMapObject: (kakaoMap) => dispatch(getMapObject(kakaoMap)),
  getSearchPlaceList: (keywordResult) => dispatch(getSearchPlaceList(keywordResult)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)