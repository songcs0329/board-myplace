import { faCheck, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchQuery } from 'Apis/kakao';
import { FormInput, FormSelect, FormSubmitBtn } from 'GlobalStyles';
import React from 'react';
import { PlaceSearchWrap, SelectedOption } from './style';

const BoardPlace = ({ spot, setSpot, boardWrite, setBoardWrite }) => {
  const { place, address } = boardWrite
  const changeSpot = e => {
    setSpot({
      ...spot,
      [e.target.name]: e.target.value
    })
  }
  const submitSpot = async e => {
    e.preventDefault()
    if(!spot.search) return alert("장소를 입력해주세요.")
    const searchData = await SearchQuery(spot.search)
    if(!searchData.documents.length > 0) return alert("조회결과가 없습니다.")
    setSpot({
      ...spot,
      options: searchData.documents.length > 0 ? searchData.documents : null
    })
  }
  const selectOptions = e => {
    const target = e.target;
    const place = target.value
    const address = target.options[target.selectedIndex].getAttribute("address")
    const lateX = target.options[target.selectedIndex].getAttribute("x")
    const lateY = target.options[target.selectedIndex].getAttribute("y")
    setBoardWrite({
      ...boardWrite,
      place,
      address,
      lating: {
        x: lateX,
        y: lateY
      }
    })
  }
  return (
    <>
      <PlaceSearchWrap>
        <FormInput>
          <input
            type="text"
            name="search"
            placeholder="장소를 입력해주세요."
            value={spot.search}
            onChange={changeSpot}
            className="formInput"
            required
          />
        </FormInput>
        <FormSubmitBtn>
          <button
            type="button"
            onClick={submitSpot}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </FormSubmitBtn>
      </PlaceSearchWrap>
      {
        spot.options &&
        <>
          <FormSelect>
            <select name="place" value={place} onChange={selectOptions} required>
              <option>세부장소를 선택해주세요.</option>
              {
                spot.options.map((option, idx) => {
                  return (
                    <option
                      key={idx}
                      value={option.place_name}
                      address={option.address_name}
                      x={option.x}
                      y={option.y}
                    >
                      {option.place_name}
                    </option>
                  )
                })
              }
            </select>
          </FormSelect>
        </>
      }
      {
        address &&
        <SelectedOption>
          <FontAwesomeIcon icon={faCheck} />
          {address}
        </SelectedOption>
      }
    </>
  );
};

export default BoardPlace;