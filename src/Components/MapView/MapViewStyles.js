import styled from 'styled-components'

export const MapViewStyles = styled.div`
  width: 100%;
  height: 100%;
  > div {
    width: 100%;
    height: 100%;
  }
  .marker_cont {
    position: relative;
    top: -50px;
    min-width: 240px;
    padding: 30px 15px 15px;
    border-radius: 10px;
    background-color: #222;
    color: #fff;
    > strong {
      display: block;
      font-weight: 500;
      font-size: 16px;
    }
    > span {
      position: absolute;
      right: 15px;
      top: 8px;
      font-family: "Roboto";
      letter-spacing: 0;
    }
    dl {
      margin-top: 12px;
      overflow: hidden;
      dt,
      dd {
        float: left;
      }
      dt {
        padding-right: 8px;
        margin-right: 8px;
        border-right: 1px solid #fff;
      }
    }
  }
`