import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle Signup
  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Signup successful');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src="media/images/signup.png" alt="Signup Promo" className="signup-image" />
        <h3>Join Us and Enjoy:</h3>
        <ul>
          <li>Easy stock trading</li>
          <li>Comprehensive back-office operations</li>
          <li>Direct mutual funds in a demat account</li>
        </ul>
      </div>
      <div className="signup-right">
        <form onSubmit={handleSignup} className="signup-form">
          <h2>Signup</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="signup-input"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="signup-input"
          />
          <button type="submit" className="signup-button">Continue</button>
        </form>
        <div className="login-link-container">
          <Link to="/login" className="login-link">Already have an account? Login</Link>
        </div>
        <a href="#" className="nri-link">Want to open an NRI account?</a>
        <div className="disclaimer">
          <p>By signing up, you authorize us to contact you even if your number is registered on DND. We will fetch KYC information from the C-KYC registry with your PAN. Online KYC is conducted as per KRA regulations and PMLA guidelines. For HUF, Corporate, Partnership, or NRI accounts, please use offline forms.</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
