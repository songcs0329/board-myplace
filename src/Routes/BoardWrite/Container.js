import React, { useState } from 'react';
import { fBaseDB, fBaseStorage } from 'Apis/fBase';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import BoardDesc from '../../Components/BoardDesc'
import BoardPlace from '../../Components/BoardPlace'
import BoardImages from '../../Components/BoardImages'
import { WriteStyles, WriteWrap } from './WriteStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { FormSubmitBtn, FormVertical } from 'GlobalStyles';

const getToday = () => {
  let year = new Date().getFullYear()
  let month = 1 + new Date().getMonth() 
  let day = new Date().getDate()
  month = month >= 10 ? month : `0${month}`
  day = day >= 10 ? day: `0${day}`
  return `${year}-${month}-${day}`
}

const uploadImgAsync = async (user, imgFiles) => {
  return Promise.all(imgFiles.map(async file => {
    const path = `${user.uid}/${uuidv4()}`
    const uploadTask = await fBaseStorage.ref(path).put(file)
    const fileURL = await uploadTask.ref.getDownloadURL()
    return fileURL
  }))
}

const Container = ({ userObject }) => {
  const history = useHistory()
  const [spot, setSpot] = useState({
    search: "",
    options: null
  })
  
  const [imgFiles, setImgFiles] = useState(null)
  const [imgViewers, setImgViewers] = useState(null)
  const [boardWrite, setBoardWrite] = useState({
    title: "",
    desc: "",
    place: "",
    address: "",
  })

  const submitBoard = async e => {
    e.preventDefault()
    const { title, desc, place, address } = boardWrite
    if(title === "") return alert("제목을 확인해주세요.")
    if(desc === "") return alert("내용을 확인해주세요.")
    let uploadImgPath;
    if(imgFiles) uploadImgPath = uploadImgAsync(userObject, imgFiles)
    const uploadImgPathArr = await uploadImgPath
    const boardObject = {
      email: userObject.email,
      creatorId: userObject.uid,
      createdAt: Date.now(),
      date: getToday(),
      uploadImgPathArr,
      title,
      desc,
      place,
      address,
    }
    console.log(boardObject)
    await fBaseDB.collection("mapboard").add(boardObject)
    history.push("/")
  }

  return (
    <WriteStyles>
      <WriteWrap>
        <FontAwesomeIcon icon={faClipboard} size="3x"/>
        <FormVertical
          onSubmit={submitBoard}
        >
          <BoardDesc
            boardWrite={boardWrite}
            setBoardWrite={setBoardWrite}
          />
          <BoardPlace
            spot={spot}
            setSpot={setSpot}
            boardWrite={boardWrite}
            setBoardWrite={setBoardWrite}
          />
          <BoardImages
            imgFiles={imgFiles}
            setImgFiles={setImgFiles}
            imgViewers={imgViewers}
            setImgViewers={setImgViewers}
          />
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

export default Container;