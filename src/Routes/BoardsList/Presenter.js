import React from 'react';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BoardItem, BoardListStyles } from './BoardsListStyles'
import { Link } from 'react-router-dom';

const Presenter = ({mapBoards}) => {
  return (
    <BoardListStyles>
      {
        mapBoards.map(board => {
          return (
            <BoardItem key={board.id}>
              <Link to={`/boards/${board.id}`}>
                <div className="img">
                  {
                    board.uploadImgPath ?
                    <img src={board.uploadImgPath[0]} alt={board.title}/>
                    :
                    <span className="no_img"></span>
                  } 
                </div>
                <div className="board">
                  <strong>{board.title}</strong>
                  <span className="email"><FontAwesomeIcon icon={faPen} />{board.email}</span>
                </div>
              </Link>
            </BoardItem>
          )
        })
      }
    </BoardListStyles>
  );
};

export default Presenter;