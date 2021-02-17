import { FormInput } from 'GlobalStyles';
import React from 'react';
import { MapStyles, PlaceSearcher, PlaceMap } from './MapStyles';

const Presenter = ({ keyword, changeKeyword, searchKeyword }) => {
  return (
    <MapStyles>
      <PlaceSearcher>
        <form onSubmit={searchKeyword}>
          <FormInput>
            <input
              type="text"
              name="keyword"
              placeholder="주소를 입력해주세요."
              value={keyword}
              onChange={changeKeyword}
              className="formInput"
            />
          </FormInput>
          <FormInput>
            <input
              type="submit"
              className="formSubmit"
              value="검색하기"
              onSubmit={searchKeyword}
            />
          </FormInput>
        </form>
      </PlaceSearcher>
      <PlaceMap>
        <div id="map"></div>
      </PlaceMap>
    </MapStyles>
  );
};

export default Presenter;