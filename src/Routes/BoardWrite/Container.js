import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import BoardDesc from '../../Components/BoardDesc'
import BoardPlace from '../../Components/BoardPlace'
import BoardImages from '../../Components/BoardImages'
import { WriteIconList, WriteStyles, WriteWrap } from './WriteStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faClipboard } from '@fortawesome/free-solid-svg-icons';
import { FormSubmitBtn, FormVertical, WarnMessage } from 'GlobalStyles';
import { addCollectionDB, deleteImgAsync, getMapItemDB, getToday, updateMapItemDB, uploadImgAsync } from 'Utils/utils';

const Container = ({ userObject }) => {
  const { boardId } = useParams()
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

  useEffect(() => {
    if(boardId) {
      const getBoardItem = getMapItemDB(boardId)
      getBoardItem.then((itemObject) => {
        deleteImgAsync(itemObject)
        const { title, desc } = itemObject
        setBoardWrite((boardWrite) => {
          return {
            ...boardWrite,
            title,
            desc,
          }
        })
      })
    }
  }, [boardId])

  const handleGoBack = () => history.goBack()
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
    if(boardId) updateMapItemDB(boardId, boardObject)
    else addCollectionDB(boardObject)
    handleGoBack()
  }

  return (
    <WriteStyles>
      <WriteWrap>
        <WriteIconList>
          <li><FontAwesomeIcon icon={faChevronCircleLeft} onClick={handleGoBack}/></li>
          <li><FontAwesomeIcon icon={faClipboard} /></li>
        </WriteIconList>
        <FormVertical
          onSubmit={submitBoard}
        >
          <BoardDesc
            boardWrite={boardWrite}
            setBoardWrite={setBoardWrite}
          />
          {
            boardId &&
            <WarnMessage>내용 수정 시에 기존 장소 및 이미지는 삭제됩니다.<br/>재등록 부탁드립니다.</WarnMessage>
          }
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