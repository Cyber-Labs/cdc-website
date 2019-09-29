import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./Pages/Home/Home";
import Header from './Components/Header'
import Footer from './Components/Footer'
import ForCompanies from "./Pages/Company/Company";
import Alumni from "./Pages/Alumni/Alumni";
import Policy from "./Pages/Policies/Policy";
import ContactUs from "./Pages/ContactUs/ContactUs";
<<<<<<< HEAD
import PlacementStats from "./Pages/PlacementStats/Placement-Stats";
=======
import Placement from "./Pages/Placement/Placement";
import example from "./Pages/example";
import 'bootstrap/dist/css/bootstrap.min.css';

>>>>>>> 28a622f30265aa36f03ae6132ef58aa687251f6a

const routing = (
  <Router>
    <div id="/">
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/for-companies" component={ForCompanies} />
        <Route exact path="/for-alumni" component={Alumni} />
        <Route exact path="/policies" component={Policy} />
        <Route exact path="/contact-us" component={ContactUs} />
<<<<<<< HEAD
        <Route exact path="/placement-stats" component={PlacementStats} />
        <Route exact path="/dummylink" component={DummyLink} />
        <Route component={DummyLink} />
=======
        <Route exact path="/placement-stats" component={Placement} />
>>>>>>> 28a622f30265aa36f03ae6132ef58aa687251f6a
      </Switch>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
