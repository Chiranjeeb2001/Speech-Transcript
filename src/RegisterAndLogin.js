// RegisterAndLogin.js

import React, { useState } from 'react';
import { database } from './FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './RegisterAndLogin.css';

function RegisterAndLogin() {
  const [login, setLogin] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type === 'signup') {
      createUserWithEmailAndPassword(database, email, password)
        .then(() => {
          history('/home');
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then(() => {
          history('/home');
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = () => {
    history('/reset');
  };

  return (
    <div className="background-video">
      <video autoPlay muted loop className="video-background">
        <source src="/Images/bgvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <div className="App">
          <div className="row">
            <div className={login === false ? 'activeColor' : 'pointer'} onClick={() => setLogin(false)}>
              SIGNUP
            </div>
            <div className={login === true ? 'activeColor' : 'pointer'} onClick={() => setLogin(true)}>
              SIGNIN
            </div>
          </div>
          <h1>{login ? 'SignIn' : 'SignUp'}</h1>
          <form onSubmit={(e) => handleSubmit(e, login ? 'signin' : 'signup')}>
            <input name="email" placeholder="Email" />
            <br />
            <input name="password" type="password" placeholder="Password" />
            <br />
            <p onClick={handleReset}>Forgot Password?</p>
            <br />
            <button>{login ? 'SignIn' : 'SignUp'}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterAndLogin;
