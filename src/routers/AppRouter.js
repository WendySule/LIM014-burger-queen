import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../view-controllers/Home';
import Waiter from '../view-controllers/Waiter';
import Error404 from '../view-controllers/Error404';

function AppRouter(){
    return(
       <Router>
           <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/Waiter" component={Waiter} />
               <Route path="*" component={Error404} />
           </Switch>
       </Router>
    );
}

export default AppRouter;