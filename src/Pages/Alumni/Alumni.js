import React from "react";
import "./Alumni.css";
import AlumniVisit from "./AlumniVisit";
import Experience from "./Experience";

export default class Alumni extends React.Component {
  render() {
    return (
      <div>
        <AlumniVisit />
        <Experience />
      </div>
    );
  }
}
