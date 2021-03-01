import styled from 'styled-components'

export const BoardListStyles = styled.ol`
  display: grid;
  padding: 40px;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 20px;
`

export const BoardItem = styled.li`
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(34,34,34,0.3);
  border-radius: 8px;
  .map_button {
    display: block;
    width: 100%;
    text-align: left;
  }
  .img {
    overflow: hidden;
    width: 100%;
    height: 200px;
    img {
      width: 100%;
      max-width: 100%;
      vertical-align: top;
    }
  }
  .no_img {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #eee;
    &:before,
    &:after {
      content: '';
      display: block;
      width: 50px;
      height: 2px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin: -1px 0 0 -25px;
      background-color: #ccc;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
  .board {
    padding: 20px;
    * {
      line-height: 1.4;
    }
    > strong {
      font-weight: 500;
      font-size: 20px;
    }
    .email {
      display: block;
      margin-top: 10px;
      font-size: 16px;
      > svg {
        margin-right: 5px;
      }
    }
  }
`