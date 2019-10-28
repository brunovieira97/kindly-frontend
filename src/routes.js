import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import TopMenu from './components/TopMenu'
import SignUp from './pages/SignUp'
import SignUpDetails from './pages/SignUpDetails'
import SignIn from './pages/SignIn'


const Routes = withRouter(({ location }) => (
  <div>
    {(location.pathname !== '/signup' && location.pathname !== '/signin' && location.pathname !== '/signUpDetails') && <TopMenu />}
    <Switch>
      <Route exact path="/" component={() => <h1>HELLO THERE!</h1>} />
      <Route exact path="/signup" component={() => <SignUp />} />
      <Route exact path="/signin" component={() => <SignIn />} />
      <Route exact path="/signUpDetails" component={() => <SignUpDetails />} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </div>
));

export default Routes;