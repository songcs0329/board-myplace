import styled from 'styled-components';

export const MapBoardsStyles = styled.div`
  overflow-x: hidden;
  height: 90%;
  padding: 10px;
`

export const MapBoardsList = styled.ol`
  
  /* border: 1px solid #ccc; */
`

export const MapBoardItem = styled.li`
  overflow: hidden;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 8px 10px rgba(34,34,34,0.3);
  border-radius: 8px;
  .img {
    overflow: hidden;
    width: 100%;
    height: 100px;
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
    .email {
      display: block;
      margin: 5px 0;
      font-size: 16px;
    }
    .desc {
      margin-top: 15px;
      background-color: #F5dF4D;
      border-radius: 8px;
      pre {
        padding: 10px;
      }
    }
  }
`