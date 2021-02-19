import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormHorizontal, FormInput, FormSubmitBtn } from 'GlobalStyles';
import React from 'react';

const PlaceSearh = ({ search, changePlace, submitPlace }) => {
  return (
    <FormHorizontal onSubmit={submitPlace}>
      <FormInput>
        <input
          type="text"
          name="search"
          placeholder="주소를 입력해주세요."
          value={search}
          onChange={changePlace}
          className="formInput"
          required
        />
      </FormInput>
      <FormSubmitBtn>
        <button
          type="submit"
          onSubmit={submitPlace}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </FormSubmitBtn>
    </FormHorizontal>
  );
};

export default PlaceSearh;