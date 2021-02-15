import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavStyles, NavList } from './NavStyles';

const Presenter = ({userEmail, Link, handleLogOut}) => {
  return (
    <NavStyles>
      <h1><FontAwesomeIcon icon={faUser} />{userEmail}</h1>
      <NavList>
        <li>
          <Link to="/">지도보기</Link>
        </li>
        <li>
          <Link to="/Write">글쓰기</Link>
        </li>
      </NavList>
      <button className="logout" onClick={handleLogOut}>LOGOUT</button>
    </NavStyles>
  );
};

export default Presenter;