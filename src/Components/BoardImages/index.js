import React from 'react';
import { ImgFileItem, ImgFileList, ImgFilesSubmit, ImgFilesWrap } from './style';

const BoardImages = ({ imgFiles, setImgFiles, imgViewers, setImgViewers }) => {
  const changeFiles = e => {
    const filesArr = Array.from(e.target.files)
    setImgFiles(filesArr)
    let filesLength = filesArr.length > 3 ? 3 : filesArr.length 
    let fileURLs = []
    let file;
    for (let i = 0; i < filesLength; i++) {
      file = filesArr[i];
      let reader = new FileReader();
      reader.onload = () => {
        fileURLs[i] = reader.result;
        setImgViewers([...fileURLs])
      }
      reader.readAsDataURL(file)
    }
  }

  const filteringArr = (arr, removeIndex) => (arr.filter((view, idx) => (idx !== Number(removeIndex) && view)))

  const removeFile = e => {
    e.preventDefault()
    const targetIndex = e.target.getAttribute('image-index')
    const viewersFilter = filteringArr(imgViewers, targetIndex)
    const filesFilter = filteringArr(imgFiles, targetIndex)
    setImgViewers(viewersFilter)
    setImgFiles(filesFilter)
  }

  return (
    <>
      <ImgFilesWrap>
        <label>선택 (최대 3장)</label>
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
        <ImgFileList>
          {
            imgViewers &&
            imgViewers.map((viewer, idx) => {
              return (
                <ImgFileItem key={idx}>
                  <span className="img">
                    <img
                      src={viewer}
                      alt=""
                    />
                  </span>
                  <button className="erase" onClick={removeFile} image-index={idx}></button>
                </ImgFileItem>
              )
            })
          }
        </ImgFileList>
      </ImgFilesWrap>
    </>
  );
};

export default BoardImages;