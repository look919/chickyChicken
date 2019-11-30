import React from 'react'

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Order from '../components/Order';

const MenuPage = () => (
    <div className="container--menu">
        <Nav/>
        <Menu />
        <Order />
        <Footer />
    </div>
)

export default MenuPage