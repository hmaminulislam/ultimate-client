import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const SignUpphone_number = ({ page, setPage, formData, setFormData }) => {
  return (
    <div className="form-container my-8 py-16 px-5 sm:px-8 md:px-16">
      <div className="mb-16">
        <h4 className="text-xl text-black font-semibold text-center">
          SignUp Form
        </h4>
      </div>
      <input
        name="phone_number"
        type="tel"
        placeholder="+880"
        className="w-full outline-none border-b-2 px-3 mb-16"
        value={formData.phone_number}
        onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
      />
      <input
        name="email"
        type="email"
        placeholder="Write Email Address"
        className="w-full outline-none border-b-2 px-3 mb-16"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />
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
          onClick={() => {
            setPage(page + 1);
          }}
          className="px-4 py-3 ml-5 bg-primary text-white hover:bg-white
        hover:text-primary border border-primary rounded-2xl flex items-center"
        >
          {" "}
          Next Step <FaArrowRight className="ml-3" />
        </button>
      </div>
    </div>
  );
};

export default SignUpphone_number;