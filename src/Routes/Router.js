import React, { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Auth from './Auth';
import Map from './Map';
import Nav from './Nav';
import { loginUser, logoutUser } from 'reducers/user';
import { connect } from 'react-redux';
import { fBaseAuth } from 'Apis/fBase';
import { Loading } from 'Components/default';
import BoardWrite from './Boards/Write';
import BoardsList from './Boards/List';
import BoardDetail from './Boards/Detail';
import { ContentWrap } from 'GlobalStyles';

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
              <ContentWrap>
                <Nav user={user} />
                <Route path={`/`} exact>
                  <Map user={user} />
                </Route>
                <Route path="/write">
                  <BoardWrite />
                </Route>
                <Route path="/update/:id">
                  <BoardWrite />
                </Route>
                <Route path="/boards/:id">
                  <BoardDetail />
                </Route>
                <Route path="/boards">
                  <BoardsList />
                </Route>
              </ContentWrap>
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
  boards: state.boards.boardsList
})

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user)),
  logoutUser: () => dispatch(logoutUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Router)