import { fBaseAuth, fBaseInstance } from 'Apis/fBase';
import React, { useState } from 'react'
import Presenter from './Presenter'

export const Container = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [error, setError] = useState("")
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  })

  const handleAuth = () => setIsAuth(prev => !prev)
  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    const {email, password} = userInfo
    try {
      let data;
      if(!isAuth) data = await fBaseAuth.createUserWithEmailAndPassword(email, password)
      else data = await fBaseAuth.signInWithEmailAndPassword(email, password)
      console.log(data)
    } catch(error) {
      setError(error.message)
    }
  }
  const handleSocialClick = async e => {
    const { name } = e.target
    let provider
    switch(name) {
      case "google":
        provider = new fBaseInstance.auth.GoogleAuthProvider()
        break
      case "facebook":
        alert("준비중입니다.")
        return
      default:
        return
    }

    await fBaseAuth.signInWithPopup(provider)
  }

  return (
    <Presenter
      isAuth={isAuth}
      error={error}
      userInfo={userInfo}
      handleAuth={handleAuth}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleSocialClick={handleSocialClick}
    />
  );
};
