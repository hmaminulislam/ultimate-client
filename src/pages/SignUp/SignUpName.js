import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUpName = ({ page, setPage, formData, setFormData }) => {
  return (
    <div className="form-container my-8 py-16 px-5 sm:px-8 md:px-16">
      <div className="mb-16">
        <h4 className="text-xl text-black font-semibold text-center">
          SignUp Form
        </h4>
      </div>
      <input
        name="frist-name"
        type="text"
        placeholder="Write First Name"
        className="w-full outline-none border-b-2 px-3 mb-16"
        value={formData.fristName}
        onChange={(e) =>
          setFormData({ ...formData, fristName: e.target.value })
        }
      />
      <input
        name="last-name"
        type="text"
        placeholder="Write Last Name"
        className="w-full outline-none border-b-2 px-3 mb-16"
        value={formData.lastName}
        onChange={(e) =>
          setFormData({ ...formData, lastName: e.target.value })
        }
      />
      <button
        onClick={() => {
          setPage(page + 1);
        }}
        className="px-4 py-3 bg-primary text-white hover:bg-white hover:text-primary border border-primary rounded-2xl flex items-center mx-auto"
      >
        Next Step <FaArrowRight className="ml-3" />
      </button>
      <div className="mr-20 my-16">
        <p className="text-xs text-right">
          Already have an account?{" "}
          <Link className="text-sm text-primary underline">LOGIN HERE!</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpName;