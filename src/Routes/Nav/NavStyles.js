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
  * {
    letter-spacing: 0.5px;
    font-weight: 500;
    font-size: 14px;
  }
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
    font-family: "Roboto";
    > svg {
      margin-right: 5px;
      vertical-align: middle;
    }
  }
`

export const NavList = styled.ul`
  float: left;
  margin-left: 20px;
  > li {
    display: inline-block;
    vertical-align: middle;
    & + li {
      margin-left: 5px;
    }
  }
`