import React, { useState } from 'react';
import { SearchQuery } from 'Apis/kakao';
import Presenter from './Presenter';

const Container = ({ userObject }) => {
  const [place, setPlace] = useState({
    search: "",
    options: null
  })
  const changePlace = e => {
    setPlace({
      ...place,
      [e.target.name]: e.target.value
    })
  }
  const submitPlace = async e => {
    const searchData = await SearchQuery(place.search)
    // console.log(searchData)
    setPlace({
      ...place,
      options: searchData.documents
    })
  }

  const [boardWrite, setBoardWrite] = useState({
    title: "",
    desc: "",
    address: null,
    imgFiles: []
  })
  const changeBoard = e => {
    setBoardWrite({
      ...boardWrite,
      [e.target.name] : e.target.value
    })
  }
  const selectAdress = e => {
    setBoardWrite({
      ...boardWrite,
      address: e.target.value
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
    const { title, desc, address, imgFiles } = boardWrite
    const boardObject = {
      createdId: userObject.uid,
      createdAt: Date.now(),
      title,
      desc,
      address,
      imgFiles
    }
    console.log(boardObject)
  }

  return (
    <Presenter 
      place={place}
      changePlace={changePlace}
      submitPlace={submitPlace}
      boardWrite={boardWrite}
      changeBoard={changeBoard}
      selectAdress={selectAdress}
      changeFiles={changeFiles}
      submitBoard={submitBoard}
    />
  );
};

export default Container;