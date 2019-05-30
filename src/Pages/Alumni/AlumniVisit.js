import React from "react";
import "./AlumniVisit.css";

export default class AlumniVisit extends React.Component {
  render() {
    return (
      <div className="background">
        <div>
          <img src="assets/img/alumni.jpg" className="image4" />
        </div>
        <div className="visit-text">
          <h1>Tell us about your Visit to Dhanbad</h1>
          <div>
            Let us know about your visit to Dhanbad and we will arrange
            interaction.
            <br />
            We will provide the pickup and drop facilities to and from the
            station. Boarding and Lodging facilities will also be looked after.
          </div>
        </div>
        <div align="right">
          <a href="https://forms.gle/EPRp7eQpqiEvhsb7A" target="_blank">
            <button type="submit">Register</button>
          </a>
        </div>
      </div>
    );
  }
}
