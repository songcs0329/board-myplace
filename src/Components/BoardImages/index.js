import React from 'react';
import { ImgFileItem, ImgFileList, ImgFilesSubmit, ImgFilesWrap } from './style';

const BoardImages = ({ imgFiles, setImgFiles }) => {
  const changeFiles = e => {
    const filesArr = e.target.files
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
      reader.readAsDataURL(file)
    }
  }
  const eraseFile = e => {
    e.preventDefault()
    const eraseIndex = e.target.getAttribute('image-index')
    const filesInput = document.getElementById("imgFiles")
    filesInput.value = null
    const filterFiles = imgFiles.filter((file, idx) => {
      return idx !== Number(eraseIndex) && file
    })
    setImgFiles(filterFiles)
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
            imgFiles &&
            imgFiles.map((imgFile, idx) => {
              return (
                <ImgFileItem key={idx}>
                  <span className="img">
                    <img
                      src={imgFile}
                      alt=""
                    />
                  </span>
                  <button className="erase" onClick={eraseFile} image-index={idx}></button>
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