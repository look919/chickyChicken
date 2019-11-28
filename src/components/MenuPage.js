import React from 'react'

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Buy from '../components/Buy';

const MenuPage = () => (
    <div className="container--menu">
        <Nav/>
        <Menu />
        <Buy />
        <Footer />
    </div>
)

export default MenuPage