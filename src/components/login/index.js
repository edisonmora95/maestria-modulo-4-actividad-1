import React from 'react';
import { useState } from 'react/cjs/react.development';

import { login } from '../../services/authentication';

import './login.css';

const Login = (props) => {
  const {
    onLoginComplete,
  } = props;

  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const onLoginClick = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const username = e.target.email.value;
      const password = e.target.password.value;
      await login(username, password);
      setLoading(false);
      setError(false);
      setMessage('');
      onLoginComplete();
    } catch (error) {
      setLoading(false);
      setError(true);
      setMessage(error.message);
    }
  }

  const renderError = () => {
    if (!error) {
      return null;
    }
    return (
      <div className="alert alert-danger" role="alert">
        {message}
      </div>
    );
  }

  return (
    <main className="row login-main" onSubmit={onLoginClick}>
      {renderError()}
      <form className="col-10 col-lg-4 col-md-4">
        <section className="mt-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="text" name="email" className="form-control" id="email" placeholder="name@example.com" />
        </section>
        <section className="mt-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" name="password" className="form-control" id="password" />
        </section>
        <section className="mt-3 d-grid gap-2">
          <button type="submit" className="btn btn-primary" disabled={loading}>Login</button>
        </section>
      </form>
    </main>
  );
};

export default Login;
