import React, { useState } from 'react';
import { WriteStyles, WriteWrap } from './WriteStyles';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PlaceSearh from 'Components/PlaceSearh';
import BoardForm from 'Components/BoardForm';
import { SearchQuery } from 'Apis/kakao';

const Container = () => {
  const [place, setPlace] = useState({
    search: "",
    options: null
  })
  const [boardWrite, setBoardWrite] = useState({
    writeUer: "",
    writeAt: "",
    title: "",
    desc: "",
    imgFiles: []
  })

  const changePlace = e => {
    setPlace({
      ...place,
      [e.target.name]: e.target.value
    })
  }
  const submitPlace = e => {
    e.preventDefault()
    SearchQuery(place.search)
    console.log(place)
  }

  const changeBoard = e => {
    setBoardWrite({
      ...boardWrite,
      [e.target.name] : e.target.value
    })
  }
  const changeFiles = (e) => {
    const filesArr = e.target.files;
    let fileURLs = [];
    let file;
    let filesLength = filesArr.length > 3 ? 3 : filesArr.length

    for (let i = 0; i < filesLength; i++) {
      file = filesArr[i];
      let reader = new FileReader();

      reader.onload = () => {
        fileURLs[i] = reader.result;
        setBoardWrite({
          ...boardWrite,
          imgFiles: [...fileURLs]
        });
      }
      reader.readAsDataURL(file);
    }
  }
  const submitBoard = (e) => {
    e.preventDefault()
    console.log(boardWrite)
  }

  return (
    <WriteStyles>
      <WriteWrap>
        <FontAwesomeIcon icon={faClipboard} size="3x"/>
        <PlaceSearh 
          search={place.search}
          changePlace={changePlace}
          submitPlace={submitPlace}
        />
        <BoardForm
          title={boardWrite.title}
          desc={boardWrite.desc}
          imgFiles={boardWrite.imgFiles}
          changeBoard={changeBoard}
          changeFiles={changeFiles}
          submitBoard={submitBoard}
        />
      </WriteWrap>
    </WriteStyles>
  );
};

export default Container;