import styled from 'styled-components'

export const NavHeader = styled.header`
  overflow: hidden;
  padding: 15px 20px;
  position: fixed;
  right: 0;
  top: 0;
  background-color: #222;
  font-size: 0;
  z-index: 200;
  * {
    letter-spacing: 0.5px;
    font-family: "Roboto";
    font-weight: 500;
    font-size: 14px;
    color: #fff;
  }
  > * {
    display: inline-block;
    vertical-align: middle;
  }
  h1 {
    position: relative;
    > svg {
      margin-right: 10px;
      vertical-align: middle;
    }
  }
`

export const NavList = styled.ul`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 200;
  > li {
    width: 55px;
    height: 55px;
    margin-top: 20px;
    border-radius: 50%;
    color: #fff;
    background-color: #222;
    button,
    a {
      display: flex;
      width: 100%;
      height: 100%;
      font-size: 20px;
      align-items: center;
      justify-content: center;
    }
  }
`