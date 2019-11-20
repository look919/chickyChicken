import React from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Description from '../components/Description'
import MenuDashBoard from '../components/MenuDashBoard'
import Reviews from '../components/Reviews';
import Footer from '../components/Footer'
import '../img/logo.png'

const DashboardPage = () => (
  <div className="container">
      <Nav />
      <Header />
      <Description />
      <MenuDashBoard />
      <Reviews />
      <Footer />
  </div>
);

export default DashboardPage;
