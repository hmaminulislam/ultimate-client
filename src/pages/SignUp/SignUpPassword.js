import React, { useState } from 'react';
import toast from 'react-hot-toast';

const SignUpPassword = ({ page, setPage, formData, setFormData }) => {
    const [error, setError] = useState('')
    //sign up button handle
    const handleSubmit = () => {
        setError(" ");
        const password = formData.password;
        if (password.length < 8) {
          return setError("Your password must be 8 character");
        }
        // signup user api fatch
         fetch(`https://test.nexisltd.com/signup`, {
          method: 'POST',
          headers: {
            'content-type': 'applicatin/json'
          },
          body: JSON.stringify(formData)
         })
         .then(res => res.json())
         .then(data => {
          if (data.sucess) {
            toast.success('SignUp successfull')
          } console.log(data);
         })
    }
  return (
    <div className="form-container my-8 py-16 px-5 sm:px-8 lg:px-12">
      <div className="mb-16">
        <h4 className="text-xl text-black font-semibold text-center">
          SignUp Form
        </h4>
      </div>
      <input
        name="password"
        type="password"
        placeholder="Write Password"
        className="w-full outline-none border-b-2 px-3"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      {error ? (
        <p className="text-xs mt-2 mb-16 text-error">
          Your password must be 8 character
        </p>
      ) : (
        <p className="text-xs mt-2 mb-16">Your password must be 8 character</p>
      )}
      <div className="flex items-center justify-center">
        <button
          onClick={() => {
            setPage(page - 1);
          }}
          className="text-xs font-bold"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-3 ml-5 bg-primary text-white hover:bg-white
        hover:text-primary border border-primary rounded-2xl flex items-center"
        >
          SignUp
        </button>
      </div>
    </div>
  );
};

export default SignUpPassword;