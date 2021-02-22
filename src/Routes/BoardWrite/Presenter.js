import React from 'react';
import { FormInput, FormSelect, FormSubmitBtn, FormVertical } from 'GlobalStyles';
import { WriteStyles, WriteWrap, PlaceSearchWrap, ImgFilesSubmit, ImgFilesWrap, ImgFileList, ImgFileItem, SelectedOption } from './WriteStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClipboard, faSearch } from '@fortawesome/free-solid-svg-icons';

const Presenter = ({ place, changePlace, submitPlace, imgFiles, changeFiles, eraseFile, boardWrite, changeBoard, selectAdress, submitBoard }) => {
  return (
    <WriteStyles>
      <WriteWrap>
        <FontAwesomeIcon icon={faClipboard} size="3x"/>
        <FormVertical onSubmit={submitBoard}>
          <FormInput>
            <input
              type="text"
              name="title"
              placeholder="제목을 입력해주세요."
              value={boardWrite.title}
              onChange={changeBoard}
              className="formInput"
              required
            />
          </FormInput>
          <FormInput>
            <textarea
              type="text"
              name="desc"
              placeholder="내용을 입력해주세요."
              rows="4"
              maxLength="50"
              value={boardWrite.desc}
              onChange={changeBoard}
              className="formInput"
              required
            />
          </FormInput>
          <PlaceSearchWrap>
            <FormInput>
              <input
                type="text"
                name="search"
                placeholder="주소를 입력해주세요."
                value={place.search}
                onChange={changePlace}
                className="formInput"
                required
              />
            </FormInput>
            <FormSubmitBtn>
              <button
                type="button"
                onClick={submitPlace}
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </FormSubmitBtn>
          </PlaceSearchWrap>
          {
            place.options &&
            <FormSelect>
              <select onChange={selectAdress} required>
                {
                  place.options.map((option, idx) => {
                    return (
                      <option key={idx} value={option.place_name}>{option.place_name}</option>
                    )
                  })
                }
              </select>
            </FormSelect>
          }
          {
            boardWrite.address &&
            <SelectedOption>
              <FontAwesomeIcon icon={faCheck} />
              {boardWrite.address}
            </SelectedOption>
          }
          <ImgFilesWrap>
            <label>선택</label>
            <ImgFilesSubmit>
              <input
                id="imgFiles"
                type="file"
                accept="image/*"
                onChange={changeFiles}
                className="hide"
                multiple
              />
              <label htmlFor="imgFiles"></label>
            </ImgFilesSubmit>
            <ImgFileList>
              {
                imgFiles &&
                imgFiles.map((imgFile, idx) => {
                  return (
                    <ImgFileItem key={idx}>
                      <span className="img">
                        <img
                          src={imgFile}
                          alt=""
                        />
                      </span>
                      <button className="erase" onClick={eraseFile} data-imgidx={idx}></button>
                    </ImgFileItem>
                  )
                })
              }
            </ImgFileList>
          </ImgFilesWrap>
          <FormSubmitBtn>
              <button
                type="submit"
                onClick={submitBoard}
              >
                등록하기
              </button>
            </FormSubmitBtn>
    </FormVertical>
      </WriteWrap>
    </WriteStyles>
  );
};

export default Presenter;