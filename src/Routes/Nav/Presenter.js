import { faMapMarkedAlt, faPen, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavHeader, NavList } from './NavStyles';

const Presenter = ({userEmail, Link, handleLogOut}) => {
  return (
    <>
      <NavHeader>
        <h1><FontAwesomeIcon icon={faUser} />{userEmail}</h1>
      </NavHeader>
      <NavList>
        <li>
          <button onClick={handleLogOut}><FontAwesomeIcon icon={faSignOutAlt}/></button>
        </li>
        <li>
          <Link to="/"><FontAwesomeIcon icon={faMapMarkedAlt}/></Link>
        </li>
        <li>
          <Link to="/write"><FontAwesomeIcon icon={faPen}/></Link>
        </li>
      </NavList>
    </>
  );
};

export default Presenter;