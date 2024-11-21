import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdoptContext } from './adoptcontext';
import { useLogin } from '../components/isLoggedInContext'; // Import useLogin

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { adoptArray } = useAdoptContext();
  const { logIn, isLoggedIn } = useLogin(); // Get the logIn function and isLoggedIn state from context

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.username === username && u.password === password);

    if (user && !isLoggedIn) { // Prevent multiple calls to logIn
      logIn(); // Update context state to true when login is successful

      if (adoptArray.length > 0) {
        navigate('/payment');
      } else {
        navigate('/');
      }
    } else if (!user) {
      setError('Invalid credentials');
    } else {
      setError('You are already logged in');
    }
  };

  return (
    <div className="form-container alt">
      <div className="alt_page_images img">
        <h1>Login</h1>
      </div>
      <div className="form2">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={!username || !password}>Login</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
