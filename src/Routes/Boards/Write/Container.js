import React, { useState } from 'react';
import { connect } from 'react-redux';
import Presenter from './Presenter';

const Container = () => {
  const [boardWrite, setBoardWrite] = useState({
    writeUer: "",
    writeAt: "",
    title: "",
    address: "",
    desc: "",
    imgFiles: []
  })

  const handleChange = e => {
    setBoardWrite({
      ...boardWrite,
      [e.target.name] : e.target.value
    })
  }
  const onFilesChange = (e) => {
    const filesArr = e.target.files;
    let fileURLs = [];
    let file;
    let filesLength = filesArr.length > 4 ? 4 : filesArr.length

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

  console.log(boardWrite)

  return (
    <Presenter
      boardWrite={boardWrite}
      handleChange={handleChange}
      onFilesChange={onFilesChange}
    />
  );
};

const mapStateToProps = state => ({
  user: state.user.userinfo,
})

export default connect(
  mapStateToProps
)(Container)