import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assetes/image/ultimate-logo.png'

const Attendence = () => {
    return (
      <div className="px-5 sm:px-10 md:px-16 mt-10">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <h3 className="text-center text-4xl bg-primary w-[480px] py-5 text-white font-semibold mx-auto">
          Attendance information
        </h3>
        <div className="grid grid-cols-3 gap-10 px-5 md:px-20 mt-16">
          <h5 className="text-base font-semibold text-secondary">Date</h5>
          <h5 className="text-base font-semibold text-center text-secondary">
            Employee Name
          </h5>
          <h5 className="text-base font-semibold text-right text-secondary">
            Status
          </h5>
        </div>
      </div>
    );
};

export default Attendence;