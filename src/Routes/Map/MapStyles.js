import styled from 'styled-components'

export const MapStyles = styled.div`
  width: 100%;
  height: calc(100vh - 54px);
  position: relative;
`

export const PlaceSearcher = styled.div`
  padding: 20px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0%;
  z-index: 2;
  background-color: #fff;
  border-right: 1px solid #ddd;
  div {
    display: inline-block;
    vertical-align: middle;
  }
`

export const PlaceMap = styled.div`
  width: 100%;
  height: 100%;
  > div {
    width: 100%;
    height: 100%;
  }
`