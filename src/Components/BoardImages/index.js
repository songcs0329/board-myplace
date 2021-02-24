import React from 'react';
import { ImgFileItem, ImgFileList, ImgFilesSubmit, ImgFilesWrap } from './style';

const BoardImages = ({ uid, setImgUrl, setImgFiles, imgViewer, setImgViewer }) => {
  const changeFiles = e => {
    const filesArr = Array.from(e.target.files)
    setImgFiles(filesArr)

    const uploadUrl = filesArr.map(file => {
      const { name } = file
      return `${uid}/${name}`
    })
    setImgUrl(uploadUrl)

    let fileURLs = []
    let file;
    for (let i = 0; i < filesArr.length; i++) {
      file = filesArr[i];
      let reader = new FileReader();
      reader.onload = () => {
        fileURLs[i] = reader.result;
        setImgViewer([...fileURLs])
      }
      reader.readAsDataURL(file)
    }
  }
  const eraseFile = e => {
    e.preventDefault()
    const eraseIndex = e.target.getAttribute('image-index')
    const filesInput = document.getElementById("imgFiles")
    filesInput.value = null
    const filterView = imgViewer.filter((viewer, idx) => {
      return idx !== Number(eraseIndex) && viewer
    })
    setImgViewer(filterView)
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
            imgViewer &&
            imgViewer.map((viewer, idx) => {
              return (
                <ImgFileItem key={idx}>
                  <span className="img">
                    <img
                      src={viewer}
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