import React from "react";
import { Route, Switch } from "react-router-dom";
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'


const Routes = () => (
      <Switch>
        <Route exact path="/" component={() => <h1>HELLO THERE!</h1>} />
        <Route exact path="/signup" component={() => <SignUp />} />
        <Route exact path="/signin" component={() => <SignIn />} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
  );
  
  export default Routes;