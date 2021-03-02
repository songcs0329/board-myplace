import React, { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Auth from './Auth';
import Map from './Map';
import Nav from './Nav';
import { loginUser, logoutUser } from 'modules/user';
import { connect } from 'react-redux';
import { fBaseAuth } from 'Apis/fBase';
import { Loading } from 'Components/default';
import BoardWrite from './BoardWrite';

const Router = (props) => {
  const [init, setInit] = useState(false)
  const { userObject, loginUser, logoutUser } = props
  
  useEffect(() => {
    fBaseAuth.onAuthStateChanged(user => {
      if(!user) {
        logoutUser()
      }
      else {
        loginUser(user)
      }
      setInit(true)
    })
  }, [loginUser, logoutUser])

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
              Boolean(userObject)
              ?
              <>
                <Nav userObject={userObject} />
                <Route path={`/`} exact>
                  <Map userObject={userObject} />
                </Route>
                <Route path="/write">
                  <BoardWrite userObject={userObject} />
                </Route>
                <Route path="/update/:boardId">
                  <BoardWrite />
                </Route>
              </>
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
  userObject: state.user.userinfo,
})

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user)),
  logoutUser: () => dispatch(logoutUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Router)