import React from 'react';
import logo from '../../../assetes/image/ultimate-logo.png'
import banner from '../../../assetes/image/banner.png'
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    return (
      <div className="mt-16">
        <Link to='/'>
          <img src={logo} alt="Ultimate logo" />
        </Link>
        <div>
          <img className="lg:w-[612px] w-full mx-auto" src={banner} alt="Banner" />
        </div>
      </div>
    );
};

export default LeftSidebar;