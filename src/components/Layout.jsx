import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This will render child components */}
      <Footer />
    </>
  );
};

export default Layout;
