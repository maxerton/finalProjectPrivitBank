import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from './SideMenu';

const Main = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const sideMenuOpenObject = {
    value: sideMenuOpen,
    set: setSideMenuOpen
  }
  return (
    <div className="main">
      <div className="container main-container">
        <SideMenu open={sideMenuOpenObject}></SideMenu>
        <div className="content">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;