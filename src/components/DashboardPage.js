import React from 'react'
import Nav from '../components/Nav';
import Header from '../components/Header';
import Description from '../components/Description';
import MenuDashboard from '../components/MenuDashboard';
import Reviews from '../components/Reviews';
import Footer  from '../components/Footer';

const DashboardPage = () => (
    <div className="container">
        <Nav />
        <Header />
        <Description />
        <MenuDashboard />
        <Reviews />
        <Footer />
    </div>
)

export default DashboardPage