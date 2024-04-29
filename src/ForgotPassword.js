// ForgotPassword.js

import React from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { database } from './FirebaseConfig';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailVal = e.target.email.value;
    sendPasswordResetEmail(database, emailVal)
      .then(() => {
        alert('Check your email for password reset instructions.');
        history('/');
      })
      .catch((err) => {
        alert(err.code);
      });
  };

  return (
    <div className="App">
      <h1>Forgot Password</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        Email : <input name="email" />
        <br />
        <br />
        <button>Reset</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
