import styled from 'styled-components'

export const PlaceSearchWrap = styled.div`
  width:100%;
  > div {
    display: inline-block;
    vertical-align: middle;
    &:first-child {
      width: calc(100% - 60px);
    }
    &:last-child {
      width: 60px;
    }
  }
`
export const SelectedOption = styled.strong `
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  font-weight: 500;
  text-align: left;
  background-color: #F5dF4D;
  > svg {
    display: block;
    margin-bottom: 5px;
  }
`