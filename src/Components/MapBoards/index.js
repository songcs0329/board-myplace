import React from 'react';
import { MapBoardItem, MapBoardsList, MapBoardsStyles } from './MapBoardsStyles';

const MapBoards = ({ boardsList }) => {
  
  return (
    <MapBoardsStyles>
      {
        boardsList.length > 0 && 
        <MapBoardsList>
          {
            boardsList.map(board => {
              return (
                <MapBoardItem key={board.id}>
                  <div className="img">
                    <img src={board.uploadImgPathArr[0]} alt={board.title}/>
                  </div>
                  <div className="board">
                    <strong>{board.title}</strong>
                    <span className="email">{board.email}</span>
                    <dl>
                      <dt>{board.place}</dt>
                      <dd>{board.address}</dd>
                    </dl>
                    <div className="desc">
                      <pre>{board.desc}</pre>
                    </div>
                  </div>
                </MapBoardItem>
              )
            })
          }
        </MapBoardsList>
        
      }
    </MapBoardsStyles>
  );
};

export default MapBoards;