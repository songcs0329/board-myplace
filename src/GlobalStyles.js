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
    color: #222;
    word-break: break-all;
  }
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    background-color: #fff;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(34,34,34,0.3);
  }
  ::-webkit-scrollbar-button {
    width: 0;
    height: 0;
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
  input,
  textarea {
    border: 0;
    outline: none;
  }
  select {
    appearance: none;
    outline: none;
    border-color: #ccc;
    &:focus {
      border-color: #222;
    }
  }
  ul,
  li {
    list-style: none;
  }
  pre {
    white-space: pre-wrap;
    word-break: break-all;
  }
  * {
    color: inherit;
  }
  .hide {
    width: 0;
    height: 0;
    position: absolute;
    left: -9999px;
    text-indent: -9999px;
    font-size: 0;
  }
`

export const FormVertical = styled.form`
  width:100%;
  > div {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const FormHorizontal = styled.form`
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

export const FormInput = styled.div`
  input,
  textarea {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    resize: none;
    &:focus {
      border-color: #222;
    }
  }
`
export const FormSubmitBtn = styled.div`
  button {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 14px;
    color: #fff;
    background-color: #333;
    border: 1px solid #333;
    letter-spacing: 0.5px;
    font-weight: 500;
  }
  * {
    color: inherit;
  }
`

export const FormSelect = styled.div`
  width: 100%;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -8px;
    border-left: 1px solid #222;
    border-bottom: 1px solid #222;
    transform: rotate(-45deg);
  }
  select {
    width: 100%;
    padding: 10px;
  }
  option {
    width: 100%;
    font-size: 14px;
  }
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

export const WarnMessage = styled.div`
  text-align: center;
  font-weight: 300;
  font-size: 14px;
  color: #ed4337;
  line-height: 1.4;
`