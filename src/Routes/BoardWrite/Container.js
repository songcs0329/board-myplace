import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SearchQuery } from 'Apis/kakao';
import Presenter from './Presenter';
import { fBaseDB, fBaseStorage } from 'Apis/fBase';

const getToday = () => {
  let year = new Date().getFullYear()
  let month = 1 + new Date().getMonth() 
  let day = new Date().getDate()
  month = month >= 10 ? month : `0${month}`
  day = day >= 10 ? day: `0${day}`
  return `${year}-${month}-${day}`
}

const Container = ({ userObject }) => {
  const uploadRef = useRef(0)
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
    setPlace({
      ...place,
      options: searchData.documents
    })
  }

  const [imgFiles, setImgFiles] = useState(null)
  const [boardWrite, setBoardWrite] = useState({
    title: "",
    desc: "",
    date: null,
    address: null,
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
  const changeFiles = e => {
    const filesArr = e.target.files;
    let fileURLs = [];
    let file;
    let filesLength = filesArr.length > 3 ? 3 : filesArr.length

    for (let i = 0; i < filesLength; i++) {
      file = filesArr[i];
      let reader = new FileReader();
      reader.onload = () => {
        fileURLs[i] = reader.result;
        setImgFiles([...fileURLs])
      }
      reader.readAsDataURL(file);
    }
  }
  const eraseFile = e => {
    const targetIdx = e.target.getAttribute('data-imgidx')
    const filterFiles = imgFiles.filter((imgFile, idx) => {
      return idx !== Number(targetIdx) && imgFile
    })
    setImgFiles(filterFiles)
  }
  const submitBoard = async e => {
    e.preventDefault()
    const { title, desc, address } = boardWrite
    if(title === "") return alert("제목을 확인해주세요.")
    if(desc === "") return alert("내용을 확인해주세요.")
    if(address === null) return alert("주소를 확인해주세요.")

    if(imgFiles) {
      imgFiles.forEach(async dataURL => {
        const attachRef = fBaseStorage.ref().child(`${userObject.uid}/${uploadRef.current}/${uuidv4()}`)
        await attachRef.putString(dataURL, "data_url")
      })
    }
    
    const boardObject = {
      boardId: `${userObject.uid}/${uploadRef.current}`,
      createdId: userObject.uid,
      createdAt: Date.now(),
      date: getToday(),
      title,
      desc,
      address,
    }
    console.log(boardObject)
    await fBaseDB.collection("eatingboard").add(boardObject)
    setPlace({
      search: "",
      options: null
    })
    setBoardWrite({
      title: "",
      desc: "",
      date: null,
      address: null,
    })
    setImgFiles([])
    uploadRef.current += 1
  }

  return (
    <Presenter 
      place={place}
      changePlace={changePlace}
      submitPlace={submitPlace}
      imgFiles={imgFiles}
      changeFiles={changeFiles}
      eraseFile={eraseFile}
      boardWrite={boardWrite}
      changeBoard={changeBoard}
      selectAdress={selectAdress}
      submitBoard={submitBoard}
    />
  );
};

export default Container;