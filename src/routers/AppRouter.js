import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import MenuPage from '../components/MenuPage';
import ReservationPage from '../components/ReservationPage';
import ContactPage from '../components/ContactPage'
import NotFoundPage from '../components/NotFoundPage';



const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/menuPage" component={MenuPage} exact={true}/>
        <Route path="/reservationPage" component={ReservationPage}/>
        <Route path="/contactPage" component={ContactPage} />
      
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
  
);

export default AppRouter;
