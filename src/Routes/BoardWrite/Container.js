import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import BoardDesc from '../../Components/BoardDesc'
import BoardPlace from '../../Components/BoardPlace'
import BoardImages from '../../Components/BoardImages'
import { WriteStyles, WriteWrap } from './WriteStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { FormSubmitBtn, FormVertical } from 'GlobalStyles';
import { addCollectionDB, getToday, uploadImgAsync } from 'Utils/utils';

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
    lating: null
  })

  const submitBoard = async e => {
    e.preventDefault()
    const { title, desc, place, address, lating } = boardWrite
    if(title === "") return alert("제목을 확인해주세요.")
    if(desc === "") return alert("내용을 확인해주세요.")
    let uploadImgPath = "";
    if(imgFiles) uploadImgPath = await uploadImgAsync(userObject, imgFiles)
    const boardObject = {
      email: userObject.email,
      creatorId: userObject.uid,
      createdAt: Date.now(),
      date: getToday(),
      uploadImgPath,
      title,
      desc,
      place,
      address,
      lating
    }
    console.log(boardObject)
    addCollectionDB(boardObject)
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