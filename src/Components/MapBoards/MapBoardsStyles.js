import styled from 'styled-components';

export const MapBoardsStyles = styled.div`
  overflow: hidden;
`

export const MapBoardsList = styled.ol`
  background-color: #ccc;
  border: 1px solid #ccc;
`

export const MapBoardItem = styled.li`
  margin-top: 10px;
  background-color: #fff;
  &:first-child {
    margin-top: 0;
  }
  .img {
    overflow: hidden;
    width: 100%;
    height: 80px;
    img {
      width: 100%;
      max-width: 100%;
      vertical-align: top;
    }
  }
  .board {
    padding: 10px;
    border-top: 1px solid #ddd;
    * {
      line-height: 1.4;
    }
    > strong {
      font-weight: 500;
      font-size: 20px;
    }
    .desc {
      margin-top: 15px;
      background-color: #F5dF4D;
      pre {
        padding: 8px;
      }
    }
  }
`