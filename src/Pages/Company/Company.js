import React from "react";
import WhyRecruit from "./WhyRecruit";
import RegistrationAndBrochure from "./RegistrationAndBrochure";
import PastRecruiter from "./PastRecruiter";
import ReachUs from "./ReachUs";

class ForCompanies extends React.Component {
  componentDidMount(){
    document.querySelector("meta[name='keywords']").content="Companies, IIT(ISM) Dhanbad, IIT, Placement, Register company, Recruiters, Brochure, Reach IIT(ISM) Dhanbad";
    document.querySelector("meta[name='description']").content="Registration of companies for placement in IIT(ISM) Dhanbad";
  }
  render() {
    return (
      <div>
        <RegistrationAndBrochure />
        <ReachUs />
      </div>
    );
  }
}

export default ForCompanies;
