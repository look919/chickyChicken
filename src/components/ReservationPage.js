import React from 'react';
import Nav from '../components/Nav';
import InfoBarReserv from '../components/InfoBarReserv';
import Footer from '../components/Footer';
import Reservation from './Reservation';

const ReservationPage = () => (
    <div className="container--reservation">
        <Nav />
        <Reservation title="Zarezerwuj stolik"/>
        <InfoBarReserv />
        <Reservation title="Wynajmij górne piętro"/>
        <Footer />
    </div>
)

export default ReservationPage
    


