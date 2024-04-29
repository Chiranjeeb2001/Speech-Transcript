// PasswordLoginWithFirebase.js

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterAndLogin from './RegisterAndLogin';
import HomeScreen from './HomeScreen';
import ForgotPassword from './ForgotPassword';

function PasswordLoginWithFirebase() {
  // Initialize state to store user email
  const [userEmail, setUserEmail] = useState('');

  // Function to handle login and set user email
  const handleLogin = (email) => {
    setUserEmail(email);
  };

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<RegisterAndLogin onLogin={handleLogin} />} />
          {/* Pass user email as a prop to HomeScreen */}
          <Route path="/home" element={<HomeScreen userEmail={userEmail} />} />
          <Route path="/reset" element={<ForgotPassword />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default PasswordLoginWithFirebase;
