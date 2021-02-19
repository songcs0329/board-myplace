import { FormInput, FormVertical } from 'GlobalStyles';
import React from 'react';
import { ImgFilesSubmit, ImgFilesWrap, WriteFileLi, WriteFileUl } from 'Routes/BoardWrite/WriteStyles';

const BoardForm = ({ title, desc, imgFiles, changeBoard, changeFiles, submitBoard }) => {

  return (
    <FormVertical onSubmit={submitBoard}>
      <FormInput>
        <input
          type="text"
          name="title"
          placeholder="제목을 입력해주세요."
          value={title}
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
          rows="3"
          value={desc}
          onChange={changeBoard}
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
            onChange={changeFiles}
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
    </FormVertical>
  );
};

export default BoardForm;