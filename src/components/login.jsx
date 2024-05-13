import React, { useState } from "react";

const utente = {
  username: 'federico',
  password: 'test123'
}

function Login() {

  const [form, setForm] = useState(true)
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleClick = (form) => {
    setForm(form)
    setUsername('')
    setEmail('')
    setPassword('')
  }

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  
  const handleLogin = () => {
    console.log("utente loggato: ", username + ' ' + password);
  }

  const handleSignin = () => {
    console.log("utente registrato: ", email + ' ' + username + ' ' + password);
  }

  // bottone disabilitato se il form non è completo
  // click di login -> console log con scritto "utente loggato 'username' e 'password' "
  // uguale per la registrazione

  const getLogin = () => {
    return (
      <div className="form">
        <input className="input" type="text" placeholder="username" value={username} onChange={handleUsername}/>
        <input className="input" type="password" placeholder="password" value={password} onChange={handlePassword}/>
        <button className="button" type="submit" onClick={handleLogin} disabled={!username || !password}>Login</button>
      </div>
    )
  }

  const getSignin = () => {
    return (
      <div className="form">
        <input className="input" type="text" placeholder="email" value={email} onChange={handleEmail}/>
        <input className="input" type="text" placeholder="username" value={username} onChange={handleUsername}/>
        <input className="input" type="password" placeholder="password" value={password} onChange={handlePassword}/>
        <button className="button" type="submit" onClick={handleSignin} disabled={!email || !username || !password}>Signin</button>
      </div>
    )
  }

  return (
    <div>
      <div className="login-card">
        <div className="select-form-wrap">
          <span className="select-form" onClick={() => handleClick(true)}>login</span>
          <span className="select-form" onClick={() => handleClick(false)}>signin</span>
        </div>
        <div>
          {
            form === true ? getLogin() : getSignin()
          }
        </div>
      </div>
    </div>
  );
}

export default Login;
