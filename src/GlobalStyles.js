import styled, { createGlobalStyle, keyframes } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    box-sizing:border-box;
    color:inherit;
    font-family:'Noto Sans KR', 'Roboto', sans-serif;
    letter-spacing: -1px;
    line-height: 1.3;
  }
  body{
    font-family:'Noto Sans KR', 'Roboto', sans-serif;
    font-size: 14px;
  }
  a,
  button,
  input[type="submit"] {
    cursor: pointer;
  }
  a,
  button,
  input {
    margin: 0;
    padding: 0;
    outline: none;
    border: 0;
    background: none;
    text-decoration:none;
    color:inherit;
    line-height: 1.3;
  }
  ul,
  li {
    list-style: none;
  }
`

export const ContentsWrap = styled.div`
  border:1px solid #000;
  position: relative;
`

const loadingSpin = keyframes`
  0%{-webkit-transform:rotate(0deg)}
  50%{-webkit-transform:rotate(180deg)}
  100%{-webkit-transform:rotate(360deg)}
`

export const LoadingPop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.8);
  }
  .loading-circle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 30px;
    height: 30px;
    margin-left: -15px;
    margin-top: -15px;
    border-radius: 100%;
    background: transparent;
    border: 0 solid #fff;
    border-width: 2px;
    border-bottom-color: transparent;
    animation: ${loadingSpin} .75s linear infinite;
  }
`