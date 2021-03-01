import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { placeSearchFunc } from 'Apis/kakao';
import React from 'react';
import { MapBoardItem, MapBoardsStyles } from './MapBoardsStyles';

const MapBoards = ({ mapObject, boardsList }) => {
  const fromAddressToMap = (board) => placeSearchFunc(mapObject, board)

  return (
    <MapBoardsStyles>
      {
        boardsList.length > 0 && 
        <ol>
          {
            boardsList.map(board => {
              return (
                <MapBoardItem key={board.id}>
                  <button className="map_button" onClick={() => fromAddressToMap(board)}>
                    {
                      board.uploadImgPath &&
                      <div className="img">
                        <img src={board.uploadImgPath[0]} alt={board.title}/>
                      </div>  
                    }
                    <div className="board">
                      <strong>{board.title}</strong>
                      <span className="email"><FontAwesomeIcon icon={faPen} /><br />{board.email}</span>
                      <ul>
                        <li>{board.place !== "" ? board.place : "장소를 알 수 없습니다."}</li>
                        <li>{board.address !== "" ? board.address : "주소를 알 수 없습니다."}</li>
                      </ul>
                      <div className="desc">
                        <pre>{board.desc}</pre>
                      </div>
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