import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';



const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/menuPage" component={DashboardPage} />
        <Route path="/reservationPage" component={DashboardPage}/>
        <Route path="/contactPage" component={DashboardPage} />
      
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
  
);

export default AppRouter;
