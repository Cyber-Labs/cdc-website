import React from "react";
import "./Hiring.css";

class Hiring extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="box">
          <div className="flexd">
            <div align="middle" className="heading">
              <div>
                <br />
                <b>For hiring of FTEs/Interns(2/6 months)</b>
              <br />
              <hr />
              <br />
              </div>
          
            </div>
            <div className="flexlink">
              <div id="link">
                <a href="#">Internship Calender</a>
              </div>
              <div id="link">
                <a href="#">Placement Calender</a>
              </div>
            </div>

            <br />
            <div class="hiring_text">
              The Preplacement Talks will be commencing from 1st weeek of
              October.
            </div>
            <div class="hiring_text">
              The recruitment season will start from 1st of December and the
              process will continue upto May 2019.
            </div>
            <div>
              <p />
            </div>
            <div align="middle">
              <button type="submit">Register</button>
              <p />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hiring;
