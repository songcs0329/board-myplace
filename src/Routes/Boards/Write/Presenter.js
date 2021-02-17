import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormInput } from 'GlobalStyles';
import React from 'react';
import { WriteStyles, WriteWrap, WriteFileUl, WriteFileLi, ImgFilesWrap, ImgFilesSubmit } from './WriteStyles';

const Presenter = ({ boardWrite, handleChange, onFilesChange }) => {
  const { title, desc, address, imgFiles } = boardWrite;
  
  return (
    <WriteStyles>
      <WriteWrap>
        <FontAwesomeIcon icon={faClipboard} size="3x"/>
        <form className="formAddress">
          <FormInput>
            <input
              type="text"
              name="address"
              placeholder="주소를 입력해주세요."
              value={address}
              onChange={handleChange}
              className="formInput"
              required
            />
          </FormInput>
          <FormInput>
            <input
              type="submit"
              className="formSubmit"
              value="주소검색"
            />
          </FormInput>
        </form>
        <form>
          <FormInput>
            <input
              type="text"
              name="title"
              placeholder="제목을 입력해주세요."
              value={title}
              onChange={handleChange}
              className="formInput"
              required
            />
          </FormInput>
          <FormInput>
            <textarea
              type="text"
              name="desc"
              placeholder="내용을 입력해주세요."
              value={desc}
              onChange={handleChange}
              className="formInput"
              required
            />
          </FormInput>
          <ImgFilesWrap>
            <ImgFilesSubmit>
              <input
                id="imgFiles"
                type="file"
                accept="image/*"
                onChange={onFilesChange}
                className="hide"
                multiple
              />
              <label htmlFor="imgFiles"></label>
            </ImgFilesSubmit>
            <WriteFileUl>
              {
                imgFiles.length > 0 &&
                imgFiles.map((imgFile, idx) => {
                  return (
                    <WriteFileLi key={idx}>
                      <span className="img">
                        <img
                          src={imgFile}
                          alt=""
                        />
                      </span>
                    </WriteFileLi>
                  )
                })
              }
            </WriteFileUl>
          </ImgFilesWrap>
        </form>
      </WriteWrap>
    </WriteStyles>
  );
};

export default Presenter;