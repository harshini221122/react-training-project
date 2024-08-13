import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { loginAction } from "../redux/actions/auth.action";
import { loginService } from "../services/auth.service";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

export const Login2 = ({ isAutheticated, loginAction }) => {
  const [formData, setFormData] = useState(initialState);

  const navigate = useNavigate();

  const [error, setError] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const { email, password } = formData;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello from form");
    //loginService(formData);
    loginAction(formData, navigate);
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     let errDetails = {};
    //     err.response.data.errors.forEach((e) => {
    //       errDetails[e.param] = e.msg;
    //       console.log(errDetails);
    //     });

    //     setError([...errDetails]);
    //   });
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

Login2.propTypes = {
  isAuthenticated: PropTypes.bool,
  loginAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

const mapDispatchToProps = { loginAction };

export default connect(mapStateToProps, mapDispatchToProps)(Login2);
