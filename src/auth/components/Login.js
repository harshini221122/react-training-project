import React, { useState } from "react";
import { loginService } from "../services/auth.service";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const { email, password } = formData;
  const handleSubmit = (e) => {
    e.preventDefault();
    loginService(formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        let errDetails = {};
        err.response.data.errors.forEach((e) => {
          errDetails[e.param] = e.msg;
          console.log(errDetails);
        });
        setError([...errDetails]);
      });
  };

  return (
    <>
      <section class="container">
        <div class="alert alert-danger">Invalid credentials</div>
        <h1 class="large text-primary">Sign In</h1>
        <p class="lead">
          <i class="fas fa-user"></i> Sign into Your Account
        </p>
        <form class="form" onSubmit={handleSubmit} onChange={handleChange}>
          <div class="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
            />
          </div>
          <div>{error.email}</div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={[password]}
            />
          </div>
          <div>{error.password}</div>
          <input type="submit" class="btn btn-primary" value="Login" />
        </form>
        <p class="my-1">
          Don't have an account? <a href="register.html">Sign Up</a>
        </p>
      </section>
    </>
  );
};

export default Login;
