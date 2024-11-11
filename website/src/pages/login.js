import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './login.module.css';  // Import the CSS file

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'ds.dev' && password === 'TempPass') {
      localStorage.setItem('isAuthenticated', 'true');
      window.location.href = '/edit-projects';  // Redirect to Edit Projects page
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Layout title="Login">
      <div className={styles['login-container']}>
        <h2 className={styles['login-title']}>Login</h2>
        {error && <p className={styles['error-message']}>{error}</p>}
        <input
          type="text"
          className={styles['login-input']}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          className={styles['login-input']}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className={styles['login-button']} onClick={handleLogin}>
          Login
        </button>
      </div>
    </Layout>
  );
}
