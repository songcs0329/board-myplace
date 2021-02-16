import styled from 'styled-components'

export const WriteStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WriteWrap = styled.div`
  border:1px solid blue;
  width: 100%;
  padding: 50px;
  > svg {
    margin-bottom: 20px;
  }
`

export const ImgFilesWrap = styled.div`
  overflow: hidden;
  margin-bottom: 20px;
  font-size: 0;
  > * {
    display: inline-block;
    vertical-align: top;
  }
`

export const ImgFilesSubmit = styled.span`
  width: 120px;
  height: 120px;
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

export const WriteFileUl = styled.ul`
  font-size: 0;
  > li {
    display: inline-block;
    vertical-align: top;
    width: 120px;
    height: 120px;
    margin-left: 15px;
  }
`

export const WriteFileLi = styled.li`
  width: 100%;
  height: 100%;
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
`