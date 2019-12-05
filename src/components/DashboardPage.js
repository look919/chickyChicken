import React from 'react'

import Nav from './Nav'
import Header from './Header';
import Description from './Description';
import Menu from './MenuDashBoard'
import Reviews from './Reviews';
import Footer  from './Footer';

const DashboardPage = () => (
    <div className="container">
        <Nav />
        <Header />
        <Description />
        <Menu />
        <Reviews />
        <Footer />
    </div>
)

export default DashboardPage