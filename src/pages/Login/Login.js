import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState('')
    const handleSubmit = event => {
        setError('')
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 8) {
          return setError("Your password must be 8 character");
        }
        console.log(email, password)
    }
    return (
      <div className="form-container my-8 py-16 px-5 sm:px-8 md:px-16">
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
          <p className="text-xs text-right">
            Don’t have an account?{" "}
            <Link
              to="/"
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