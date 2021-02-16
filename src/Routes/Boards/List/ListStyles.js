import styled from 'styled-components'

export const BoardListStyles = styled.div`
  padding: 20px;
`

export const MasonryWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`

export const MasonryColumn = styled.li`
  display: grid;
  grid-gap: 10px;
  grid-auto-rows: max-content;
  border:1px solid lime;
`

export const BoardWriteBtn = styled.span`
  width: 50px;
  height: 50px;
  position: fixed;
  right: 25px;
  bottom: 25px;
  border-radius: 50%;
  background-color: #4285f4;
  color: #fff;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.4);
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  > a {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`