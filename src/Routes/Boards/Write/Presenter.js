import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormInput } from 'GlobalStyles';
import React from 'react';
import { WriteStyles, WriteWrap, WriteFileUl, WriteFileLi, ImgFilesWrap, ImgFilesSubmit } from './WriteStyles';

const Presenter = ({ desc, handleChange, imgFiles, onFilesChange }) => {
  return (
    <WriteStyles>
      <WriteWrap>
        <FontAwesomeIcon icon={faClipboard} size="3x"/>
        <form>
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
        </form>
      </WriteWrap>
    </WriteStyles>
  );
};

export default Presenter;