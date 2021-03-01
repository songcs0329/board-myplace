import styled from 'styled-components';

export const MapBoardsStyles = styled.div`
  overflow-x: hidden;
  height: 90%;
  padding: 20px;
`

export const MapBoardItem = styled.li`
  overflow: hidden;
  margin-bottom: 20px;
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
    height: 100px;
    img {
      width: 100%;
      max-width: 100%;
      vertical-align: top;
    }
  }
  .board {
    padding: 10px;
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
    ul {
      
    }
    li {
      margin-top: 6px;
      padding: 4px 0;
      border-bottom: 1px solid #ddd;
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