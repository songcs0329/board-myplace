import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUser, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { AuthStyles, AuthWrap, AuthInput, AuthBtnList } from './AuthStyles';

const Presenter = ({ isAuth, error, userInfo, handleAuth, handleChange, handleSubmit, handleSocialClick }) => {
  const { email, password } = userInfo
  return (
    <AuthStyles>
      <AuthWrap>
        <FontAwesomeIcon icon={faUtensils} size="3x"/>
        <form onSubmit={handleSubmit}>
          <AuthInput>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              className="authInput"
              required
            />
          </AuthInput>
          <AuthInput>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              className="authInput"
              required
            />
          </AuthInput>
          <AuthInput>
            <input
              type="submit"
              className="authSubmit"
              value="Join in"
              onSubmit={handleSubmit}
            />
          </AuthInput>
        </form>
        {error && <span className="authError">{error}</span>}
      <AuthBtnList>
        <li>
          <button onClick={handleAuth}>
            <FontAwesomeIcon icon={faUser} />
            {
              isAuth
              ?
              "Login"
              :
              "Auth"
            }
          </button>
        </li>
        <li>
          <button name="google" onClick={handleSocialClick}>
            <FontAwesomeIcon icon={faGoogle} />
            With Google
          </button>
        </li>
      </AuthBtnList>
      </AuthWrap>
    </AuthStyles>
  );
};

export default Presenter;