import { FormInput } from 'GlobalStyles';
import React from 'react';
import { MapSearchStyles } from '../MapStyles';

const MapSearch = ({ keyword, changeKeyword, filterToKeyword }) => {
  return (
    <MapSearchStyles>
      <form onSubmit={filterToKeyword}>
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
            onSubmit={filterToKeyword}
          />
        </FormInput>
      </form>
    </MapSearchStyles>
  );
};

export default MapSearch;