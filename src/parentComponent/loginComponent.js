import React from 'react';
import { useNavigate } from 'react-router-dom';

const login = () => {
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <form className="login-form form-horizontal container flex-column">
      <h3 className="text-center">Login</h3>
      <hr />
      <div className="form-group">
        <label for="email">User Name</label>

        <input
          type="text"
          name="Email"
          placeholder="Email"
          className="form-control"
          id="email"
        />
      </div>
      <div className="form-group mt-3">
        <label for="pwd">Password</label>

        <input
          type="password"
          id="pwd"
          name="Password"
          placeholder="Password"
          className="form-control"
        />
      </div>

      <div className="form-group mt-3">
        <button className="btn btn-primary" onClick={submitForm}>
          Submit
        </button>
      </div>
    </form>
  );
};

export { login as default };
