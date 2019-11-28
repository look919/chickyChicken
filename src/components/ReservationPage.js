import React from 'react';
import Nav from '../components/Nav';
import TableReserv from '../components/TableReserv';
import InfoBarReserv from '../components/InfoBarReserv';
import FloorReserv from '../components/FloorReserv';
import Footer from '../components/Footer';

const ReservationPage = () => (
    <div className="container--reservation">
        <Nav />
        <TableReserv/>
        <InfoBarReserv />
        <FloorReserv />
        <Footer />
    </div>
)

export default ReservationPage
    


