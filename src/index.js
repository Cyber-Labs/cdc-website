import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./Pages/Home/Home";
import Header from './Components/Header'
import Footer from './Components/Footer'
import ForCompanies from "./Pages/Company/Company";
import Not_found from "./Components/404";
import Alumni from "./Pages/Alumni/Alumni";
import Policy from "./Pages/Policies/Policy";
import ContactUs from "./Pages/ContactUs/ContactUs";

const routing = (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/for-companies" component={ForCompanies} />
        <Route exact path="/for-alumni" component={Alumni} />
        <Route exact path="/policies" component={Policy} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route component={Not_found} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
