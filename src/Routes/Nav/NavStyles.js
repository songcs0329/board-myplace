import styled from 'styled-components'

export const NavStyles = styled.nav`
  position: fixed;
  right: 0;
  top: 0;
  padding: 10px;
  background-color: #fff;
  font-size: 0;
  * {
    letter-spacing: 0.5px;
    font-weight: 500;
  }
  > * {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    & + * {
      margin-left: 20px;
    }
  }
  .logout {
    padding: 8px;
    font-family: "Roboto";
    letter-spacing: 2px;
  }
  h1 {
    font-family: "Roboto";
    > svg {
      margin-right: 5px;
      vertical-align: middle;
    }
  }
`

export const NavList = styled.ul`
  > li {
    display: inline-block;
    vertical-align: middle;
    & + li {
      margin-left: 5px;
    }
  }
  a {
    display: block;
    padding: 8px;
  }
`