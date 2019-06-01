import React from "react";
import "./Alumni.css";
import AlumniVisit from "./AlumniVisit";
import Experience from "./Experience";

export default class Alumni extends React.Component {
  componentDidMount(){
    document.querySelector("meta[name='keywords']").content="IIT(ISM) alumni, experience, contacts,ISM,Alumnus";
    document.querySelector("meta[name='description']").content="IIT(ISM) Dhanbad Alumni Page";
  }
  render() {
    return (
      <div>
        <AlumniVisit />
        <Experience />
      </div>
    );
  }
}
