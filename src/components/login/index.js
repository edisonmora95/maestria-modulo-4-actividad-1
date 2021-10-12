import React, { Component } from 'react';
import { login } from '../../services/authentication';

import './login.css';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      error: false,
      message: '',
      loading: false,
    };
    this.onLoginClick = this.onLoginClick.bind(this);
  }
  async onLoginClick(e) {
    const {
      onLoginComplete,
    } = this.props;
    e.preventDefault();
    try {
      this.setState({ loading: true });
      const username = e.target.email.value;
      const password = e.target.password.value;
      await login(username, password);
      this.setState({ message: '', error: false, loading: false });
      onLoginComplete();
    } catch (error) {
      this.setState({ message: error.message, error: true, loading: false });
    }
  }

  renderError() {
    const { error, message } = this.state;
    if (!error) {
      return null;
    }
    return (
      <div className="alert alert-danger" role="alert">
        {message}
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <main className="row login-main" onSubmit={this.onLoginClick}>
        {this.renderError()}
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
  }
};

export default Login;
