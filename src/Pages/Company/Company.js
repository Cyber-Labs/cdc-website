import React from "react";
import WhyRecruit from "./WhyRecruit";
import RegistrationAndBrochure from "./RegistrationAndBrochure";
import PastRecruiter from "./PastRecruiter";
import ReachUs from "./ReachUs";

class ForCompanies extends React.Component {
  render() {
    return (
      <div>
        <WhyRecruit />
        <RegistrationAndBrochure />
        <PastRecruiter />
        <ReachUs />
      </div>
    );
  }
}

export default ForCompanies;
