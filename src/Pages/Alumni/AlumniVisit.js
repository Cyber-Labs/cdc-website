import React from "react";
import "./AlumniVisit.css";

export default class AlumniVisit extends React.Component {
  render() {
    return (
      <div class="background">
        <div>
          <img src="assets/img/alumni.jpg" class="image4" />
        </div>
        <div class="visit-text">
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
