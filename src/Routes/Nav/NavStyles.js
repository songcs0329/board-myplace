import styled from 'styled-components'

export const NavStyles = styled.nav`
  overflow: hidden;
  width: 100%;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  background-color: #F5dF4D;
  font-size: 0;
  z-index: 200;
  a,
  button {
    display: block;
    padding: 8px;
    font-family: "Roboto";
    letter-spacing: 2px;
  }
  .logout {
    float: right;
  }
  h1 {
    float: left;
    padding: 8px;
    
    > svg {
      margin-right: 5px;
      vertical-align: middle;
    }
  }
`

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
    padding-right: 20px;
    margin-right: 20px;
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