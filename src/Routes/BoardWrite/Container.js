import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { fBaseDB, fBaseStorage } from 'Apis/fBase';
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

const Container = ({ userObject }) => {
  const history = useHistory()
  const [spot, setSpot] = useState({
    search: "",
    options: null
  })
  const [imgFiles, setImgFiles] = useState("")
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
    if(place === "" || address === "") return alert("장소와 주소를 확인해주세요.")
    
    if(imgFiles !== "") {
      imgFiles.forEach(async (file) => {
        const attachRef = fBaseStorage.ref().child(`${userObject.uid}/${title}/${uuidv4()}`)
        await attachRef.putString(file, "data_url")
      })
    }
    
    const boardObject = {
      creatorId: userObject.uid,
      createdAt: Date.now(),
      date: getToday(),
      attachmentURL: `${userObject.uid}/${title}`,
      title,
      desc,
      place,
      address,
    }
    console.log(boardObject)
    await fBaseDB.collection("mapboard").add(boardObject)
    setSpot({
      search: "",
      options: null
    })
    setBoardWrite({
      date: null,
      title: "",
      desc: "",
      place: "",
      address: "",
    })
    setImgFiles("")
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