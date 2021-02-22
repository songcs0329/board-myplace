import styled from 'styled-components'

export const WriteStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WriteWrap = styled.div`
  min-width: 320px;
  margin-top: 40px;
  text-align: center;
  > form {
    margin-top: 15px;
  }
`

export const PlaceSearchWrap = styled.div`
  width:100%;
  > div {
    display: inline-block;
    vertical-align: middle;
    &:first-child {
      width: calc(100% - 60px);
    }
    &:last-child {
      width: 60px;
    }
  }
`
export const SelectedOption = styled.strong `
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  font-weight: 500;
  text-align: left;
  background-color: #F5dF4D;
  > svg {
    display: block;
    margin-bottom: 5px;
  }
`

export const ImgFilesWrap = styled.div`
  overflow: hidden;
  font-size: 0;
  text-align: left;
  > label {
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 14px;
  }
`

export const ImgFilesSubmit = styled.span`
  display: block;
  width: 100px;
  height: 100px;
  label {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    border: 1px solid #ddd;
    &:before,
    &:after {
      content: '';
      display: block;
      width: 20px;
      height: 1px;
      margin-left: -10px;
      position: absolute;
      left: 50%;
      top: 50%;
      background-color: #ddd;
    }
    &:after {
      transform: rotate(90deg);
    }
  }
`

export const ImgFileList = styled.ul`
  margin-top: 15px;
  font-size: 0;
  > li {
    display: inline-block;
    vertical-align: top;
    width: 100px;
    height: 100px;
    margin-left: 10px;
    &:first-child {
      margin-left: 0;
    }
  }
`

export const ImgFileItem = styled.li`
  width: 100%;
  height: 100%;
  position:relative;
  border: 1px solid #ddd;
  .img {
    overflow: hidden;
    display: block;
    width: 100%;
    height: 100%;
    img {
      max-width: 100%;
      width: 100%;
      vertical-align: top;
    }
  }
  .erase {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 5px;
    top: 5px;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.8);
    &:before,
    &:after {
      content: "";
      display: block;
      width: 10px;
      height: 2px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -5px;
      margin-top: -1px;
      background-color: #fff;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
`