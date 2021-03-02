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
  }
`