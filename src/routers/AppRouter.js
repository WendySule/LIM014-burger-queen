import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../view-controllers/Home';
import Waiter from '../view-controllers/Waiter';
import Chef from '../view-controllers/Chef/Chef';
import HistorialContainer from '../view-controllers/Chef/HistorialContainer';
import SendOrder from '../view-controllers/SendOrder';
import OrderHistory from '../view-controllers/OrderHistory';
import Error404 from '../view-controllers/Error404';

function AppRouter(){
    return(
       <Router>
           <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/Waiter" component={Waiter} />
               <Route exact path='/Chef' component={Chef} />
               <Route exact path='/HistorialContainer' component={HistorialContainer} />
               <Route exact path='/SendOrder' component={SendOrder} />
               <Route exact path='/OrderHistory' component={OrderHistory} />
               <Route path="*" component={Error404} />
           </Switch>
       </Router>
    );
}

export default AppRouter;
