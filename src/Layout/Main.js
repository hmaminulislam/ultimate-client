import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSidebar from '../pages/shared/LeftSidebar/LeftSidebar';

const Main = () => {
    return (
      <div className="flex px-5 sm:px-10 md:px-16">
        <div className="w-3/5 mr-20">
          <LeftSidebar></LeftSidebar>
        </div>
        <div className="w-2/5">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Main;