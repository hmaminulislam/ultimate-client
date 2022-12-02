import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState('')
    const handleSubmit = event => {
      setError("");
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      const userInfo = {
        email,
        password
      }
      if (password.length < 8) {
        return setError("Your password must be 8 character");
      }
      // login user api fatch
      fetch(`https://test.nexisltd.com/login`, {
        method: "POST",
        headers: {
          "content-type": "applicatin/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if(data) {
            localStorage.setItem("access_token", data.access_token);
          }
          console.log(data);
        });
    }
    return (
      <div className="form-container my-8 py-16 px-5 sm:px-8 lg:px-12">
        <form onSubmit={handleSubmit}>
          <div className="mb-16">
            <h4 className="text-xl text-black font-semibold text-center">
              Log in Form
            </h4>
          </div>
          <input
            name="email"
            type="text"
            placeholder="Write Email Address"
            className="w-full outline-none border-b-2 px-3 mb-16"
          />
          <input
            name="password"
            type="password"
            placeholder="Write Password"
            className="w-full outline-none border-b-2 px-3"
          />
          {error ? (
            <p className="text-xs mt-2 mb-16 text-error">
              Your password must be 8 character
            </p>
          ) : (
            <p className="text-xs mt-2 mb-16">
              Your password must be 8 character
            </p>
          )}
          <button className="px-6 py-3 bg-primary text-white hover:bg-white hover:text-primary border border-primary rounded-2xl flex items-center mx-auto">
            Login
          </button>
        </form>
        <div className="my-16">
          <p className="text-xs text-center sm:text-right">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-sm text-primary underline font-semibold"
            >
              SIGN HERE!
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Login;