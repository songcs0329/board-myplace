import styled from 'styled-components'

export const AuthStyles = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  input,
  textarea {
    letter-spacing: 1px;
    font-family: 'Roboto';
    font-weight: 500;
  }
`

export const AuthWrap = styled.div`
  min-width: 320px;
  > svg {
    margin-bottom: 30px;
    color: #222;
  }
  text-align: center;
  form {
    padding: 0 5px;
    > * {
      margin-bottom: 15px;
    }
  }
`

export const AuthBtnList = styled.ul`
  overflow: hidden;
  margin-top: 15px;
  padding-top: 30px;
  border-top: 1px solid #ccc;
  li {
    float: left;
    width: 50%;
    padding: 5px;
    &:first-child {
      width: 100%;
      button {
        background-color: #4285f4;
      }
    }
    &:last-child {
      button {
        
      }
    }
    .social {
      &.google {
        background-color: #ea4335;
      }
      &.facebook {
        background-color: #29487d;
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
    color: #fff;
    > svg {
      margin-right: 5px;
      vertical-align: middle;
    }
  }
`