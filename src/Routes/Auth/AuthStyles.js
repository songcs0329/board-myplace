import styled from 'styled-components'

export const AuthStyles = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

export const AuthWrap = styled.div`
  min-width: 320px;
  text-align: center;
  > svg {
    margin-bottom: 30px;
    color: #222;
  }
  .authError {
    font-family: 'Roboto';
    letter-spacing: 0.5px;
    color: #ea4335;
  }
`

export const AuthInput = styled.div`
  margin-bottom: 15px;
  input {
    display: block;
    width: 100%;
    padding: 10px;
    letter-spacing: 1px;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 16px;
    border-radius: 8px;
    &.authInput {
      border: 1px solid #ccc;
    }
    &.authSubmit {
      color: #fff;
      background-color: #333;
    }
  }
`

export const AuthBtnList = styled.ul`
  margin-top: 15px;
  padding-top: 30px;
  border-top: 1px solid #ccc;
  li {
    & + li {
      margin-top: 15px;
    }
    &:first-child {
      button {
        background-color: #4285f4;
      }
    }
    &:last-child {
      button {
        background-color: #ea4335;
      }
    }
  }
  button {
    display: block;
    width: 100%;
    padding: 10px;
    letter-spacing: 1px;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 16px;
    border-radius: 8px;
    color: #fff;
    > svg {
      margin-right: 5px;
      vertical-align: middle;
    }
  }
`