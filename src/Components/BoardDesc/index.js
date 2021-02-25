import { FormInput } from 'GlobalStyles';
import React from 'react';

const BoardDesc = ({ boardWrite, setBoardWrite }) => {
  const changeBoard = e => {
    setBoardWrite({
      ...boardWrite,
      [e.target.name] : e.target.value
    })
  }
  
  return (
    <>
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
          rows="3"
          maxLength="120"
          value={boardWrite.desc}
          onChange={changeBoard}
          className="formInput"
          required
        />
      </FormInput>
    </>
  );
};

export default BoardDesc;