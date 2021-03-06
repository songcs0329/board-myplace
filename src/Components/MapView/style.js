import styled from 'styled-components'

export const MapViewStyles = styled.div`
  width: 100%;
  height: 100%;
  > div {
    width: 100%;
    height: 100%;
  }
  .marker_cont {
    width: 30px;
    height: 30px;
    border-radius: 50% 50% 50% 0;
    background: #222;
    position: absolute;
    transform: rotate(-45deg);
    left: 50%;
    top: 50%;
    margin: -20px 0 0 -20px;
    cursor: pointer;
    &:after {
      content: '';
      width: 14px;
      height: 14px;
      margin: 8px 0 0 8px;
      background: #fff;
      position: absolute;
      border-radius: 50%;
    }
    &.show {
      .inner {
        display: block;
      }
    }
    .inner {
      display: none;
      position: absolute;
      left: 5px;
      top: -5px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      padding: 8px 16px;
      color: #fff;
      background-color: rgba(0,0,0,0.9);
      border-radius: 8px;
      table {
        width: 100%;
      }
      th,
      td {
        padding: 5px;
        font-size: 14px;
      }
    }
  }
`