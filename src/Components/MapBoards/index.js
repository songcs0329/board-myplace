import React from 'react';
import { MapBoardItem, MapBoardsStyles } from './style';

const MapBoards = ({ mapBoards, handleDetailItem }) => {
  const handleItemClick = (board) => handleDetailItem(board)
  return (
    <MapBoardsStyles>
      {
        mapBoards.length > 0 && 
        <ol>
          {
            mapBoards.map(board => {
              return (
                <MapBoardItem key={board.id}>
                  <button className="map_button" onClick={() => handleItemClick(board)}>
                    {
                      board.uploadImgPath &&
                      <div className="img">
                        <img src={board.uploadImgPath[0]} alt={board.title}/>
                      </div>  
                    }
                    <div className="board">
                      <strong>{board.title}</strong>
                      <span className="email">{board.email}</span>
                    </div>
                  </button>
                </MapBoardItem>
              )
            })
          }
        </ol>
      }
    </MapBoardsStyles>
  );
};

export default MapBoards;