import React from 'react';
import { MapBoardsStyles } from './MapBoardsStyles';

const MapBoards = ({ boardsList }) => {
  return (
    <MapBoardsStyles>
      {
        boardsList.map(board => <div key={board.id}>{board.name}</div>)
      }
    </MapBoardsStyles>
  );
};

export default MapBoards;