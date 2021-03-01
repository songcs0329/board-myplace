import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUser, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormInput, FormSubmitBtn, FormVertical } from 'GlobalStyles';
import React from 'react';
import { AuthWrap, AuthBtnList, AuthStyles } from './AuthStyles';

const Presenter = ({ isAuth, error, userInfo, handleAuth, handleChange, handleSubmit, handleSocialClick }) => {
  const { email, password } = userInfo
  console.log(userInfo)
  return (
    <AuthStyles>
      <AuthWrap>
        <FontAwesomeIcon icon={faUtensils} size="3x"/>
        <FormVertical onSubmit={handleSubmit}>
          <FormInput>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              className="formInput"
              required
            />
          </FormInput>
          <FormInput>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              className="formInput"
              required
            />
          </FormInput>
          <FormSubmitBtn>
            <button
              type="submit"
              onSubmit={handleSubmit}
            >
              Join
            </button>
          </FormSubmitBtn>
        </FormVertical>
        {error && <span className="errorTxt">{error}</span>}
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
          <button
            name="google"
            onClick={handleSocialClick}
            className="social google"
          >
            <FontAwesomeIcon icon={faGoogle} />
            Google
          </button>
        </li>
        <li>
          <button
            name="facebook"
            onClick={handleSocialClick}
            className="social facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} />
            Facebook
          </button>
        </li>
      </AuthBtnList>
      </AuthWrap>
    </AuthStyles>
  );
};

export default Presenter;