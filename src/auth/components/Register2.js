import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { registerAction } from "../redux/actions/auth.action";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  password: "",
  email: "",
  password2: "",
};

const Register2 = ({ isAuthenticated, registerAction }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);

  const [error, setError] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { name, password, email, password2 } = formData;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello from form");
    console.log(formData);
    registerAction(formData, navigate);
    // registerService(formData)
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
    //     // err.response.data.errors.forEach((element) => {
    //     //   setError({ ...element });
    //     //   console.log(element);
    //     // });
    //   });
  };

  return (
    <>
      <section class="container">
        <h1 class="large text-primary">Sign Up</h1>
        <p class="lead">
          <i class="fas fa-user"></i> Create Your Account
        </p>
        <form class="form" onSubmit={handleSubmit} onChange={handleChange}>
          <div class="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              value={name}
            />
          </div>
          <div>{error.name}</div>
          <div class="form-group">
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              value={email}
            />
            <div>{error.email}</div>
            <small class="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
              value={password}
            />
          </div>
          <div>{error.password}</div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
              value={password2}
            />
          </div>
          <div>{error.password2}</div>
          <input type="submit" class="btn btn-primary" value="Register" />
        </form>
        <p class="my-1">
          Already have an account? <a href="login.html">Sign In</a>
        </p>
      </section>
    </>
  );
};

Register2.propTypes = {
  isAuthenticated: PropTypes.bool,
  registerAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

const mapDispatchToProps = { registerAction };

export default connect(mapStateToProps, mapDispatchToProps)(Register2);
