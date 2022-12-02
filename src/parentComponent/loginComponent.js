import React from 'react';

const login = () => {
  return (
    <form className="login-form form-horizontal container">
      <div className="form-group">
        <label for="email">User Name</label>

        <input
          type="text"
          name="Email"
          placeHolder="Email"
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
          placeHolder="Password"
          className="form-control"
        />
      </div>

      <div className="form-group mt-3">
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export { login as default };
