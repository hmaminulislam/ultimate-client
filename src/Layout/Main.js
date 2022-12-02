import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSidebar from '../pages/shared/LeftSidebar/LeftSidebar';

const Main = () => {
    return (
      <div className="md:flex px-5 sm:px-10 md:px-5 lg:px-16">
        <div className="w-full lg:w-3/5 md:mr-10 lg:mr-20">
          <LeftSidebar></LeftSidebar>
        </div>
        <div className="w-full lg:w-2/5 px-0 sm:px-10 md:px-0">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Main;