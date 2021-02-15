import React, { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Auth from './Auth';
import Map from './Map/Presenter';
import Nav from './Nav';
import { ContentsWrap } from 'GlobalStyles'
import { loginUser, logoutUser } from 'reducers/user';
import { connect } from 'react-redux';
import { fBaseAuth } from 'Apis/fBase';
import { Loading } from 'Components/default';

const Router = (props) => {
  const [init, setInit] = useState(false)
  const { user, loginUser, logoutUser } = props
  
  useEffect(() => {
    fBaseAuth.onAuthStateChanged(user => {
      if(!user) {
        logoutUser()
      } else {
        loginUser(user)
      }
      setInit(true)
    })
  }, [setInit, loginUser, logoutUser])

  return (
    <BrowserRouter>
      <Switch>
        {
          !init
          ?
          <Loading />
          :
          <>
            {
              Boolean(user)
              ?
              <ContentsWrap>
                <Nav user={user} />
                <Route path="/" exact={true}>
                  <Map user={user} />
                </Route>
              </ContentsWrap>
              :
              <Auth />
            }
          </>
        }
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = state => ({
  user: state.user.userinfo,
})

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user)),
  logoutUser: () => dispatch(logoutUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Router);