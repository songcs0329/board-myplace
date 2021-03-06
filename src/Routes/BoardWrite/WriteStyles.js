import styled from 'styled-components'

export const WriteStyles = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

export const WriteWrap = styled.div`
  min-width: 320px;
`

export const WriteIconList = styled.ul`
  padding-bottom: 10px;
  margin-bottom: 20px;
  font-size: 0;
  color: #222;
  border-bottom: 1px solid #ddd;
  > li {
    display: inline-block;
    vertical-align: middle;
    font-size: 34px;
    cursor: pointer;
    & + li {
      margin-left: 20px;
    }
  }
`