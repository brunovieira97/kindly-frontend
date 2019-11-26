import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import SignUpDetails from "./pages/SignUpDetails";
import SignIn from "./pages/SignIn";
import Institution from "./pages/Institution";
import NewInstitution from "./pages/NewInstitution";
import ManageInstitution from "./pages/ManageInstitution";
import Home from "./pages/Home";

const Routes = withRouter(({ location }) => (
  <div>
    {location.pathname !== "/signup" &&
      location.pathname !== "/signIn" &&
      location.pathname !== "/signUpDetails" && <TopMenu />}
    <Switch>
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/signup" component={() => <SignUp />} />
      <Route exact path="/signIn" component={() => <SignIn />} />
      <Route exact path="/signUpDetails" component={() => <SignUpDetails />} />
      <Route exact path="/institution/:id" component={() => <Institution />} />
      <Route
        exact
        path="/newInstitution"
        component={() => <NewInstitution />}
      />
      <Route
        exact
        path="/manageInstitution"
        component={() => <ManageInstitution />}
      />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
    {location.pathname !== "/signup" &&
      location.pathname !== "/signIn" &&
      location.pathname !== "/signUpDetails" && <Footer />}
  </div>
));

export default Routes;
