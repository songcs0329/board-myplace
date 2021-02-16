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
          <Link to="/">MAP</Link>
        </li>
        <li>
          <Link to="/boards">BOARD</Link>
        </li>
      </NavList>
      <button className="logout" onClick={handleLogOut}>LOGOUT</button>
    </NavStyles>
  );
};

export default Presenter;