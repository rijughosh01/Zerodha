import React, { useState } from 'react';
import { auth } from '../firebase'; // Adjust this path according to your project structure
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle Login
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src="media/images/login.png" alt="Login Promo" className="login-image" />
      </div>
      <div className="login-right">
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="login-input"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="login-input"
          />
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="additional-info">
          <p>© 2025. All rights reserved.</p>
          <p>Support</p>
          <p>
            NSE​ &​ BSE – SEBI Registration no.: INZ000031633<br />
            MCX - SEBI Registration no.: INZ000038238<br />
            CDSL - SEBI Registration no.: IN-DP-431-2019
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
