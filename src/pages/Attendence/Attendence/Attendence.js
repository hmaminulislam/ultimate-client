import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assetes/image/ultimate-logo.png'

const Attendence = () => {
    const [attendence, SetAttendence] = useState();
    useEffect( () => {
        fetch(`https://test.nexisltd.com/test`, {
          headers: {
            authentication: `${localStorage.getItem("access_token")}`,
            refresh_token: `bearer ${localStorage.getItem("refresh_token")}`,
            email: "aminul@gmail.com",
            frist_name: "aminul",
            last_Name: "islam",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
    }, [attendence])
    return (
      <div className="px-5 sm:px-10 md:px-16 mt-10">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <h3 className="text-center text-2xl mt-5 sm:text-4xl bg-primary w-[300px] sm:w-[480px] py-5 text-white font-semibold mx-auto">
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
        <div className="grid grid-cols-3 gap-10 px-5 md:px-20 mt-5">
          <p className="text-secondary">11/7/16</p>
          <p className="text-secondary text-center">Arlene McCoy</p>
          <p className="text-secondary text-right">Present</p>
        </div>
      </div>
    );
};

export default Attendence;