import React from "react";

import "./ContactUs.css";

export default class ContactUs extends React.Component {
  render() {
    return (
      <div>
        <div className="contact_main">
          <div align="center">
            <div id="cr1">
              <h1>Chairman</h1>
            </div>
            <div className="chairman">
              <br />
              <div>
                <img
                  src="assets/img/chairman.jpg"
                  alt="chairman_cdc"
                  className="chairman_image"
                />
              </div>
              <br />
              <div>
                <b>Prof Satish Kumar Sinha</b>
                <br />
                Phone: +91-326-2235208, 2235231, <br /> Mobile: +91-8002114960,
                7808337799 <br />
                Email: cdc@iitism.ac.in
              </div>
            </div>
          </div>
          <div align="center">
            <div className="vice_chairman">
              <div>
                <h1>Vice Chairman</h1>
                <div className="chairman">
                  <br />
                  <div>
                    <img
                      src="assets/img/pankajjain.jpg"
                      alt="vice_cr1"
                      className="chairman_image"
                    />
                  </div>
                  <br />
                  <div>
                    <b>Dr. Pankaj Kumar Jain</b>
                    <br />
                    Phone: +91-326-2235803,
                    <br /> Mobile: +91-7766904994
                    <br />
                    Email: cdc@iitism.ac.in
                  </div>
                </div>
              </div>
              <div>
                <h1>Vice Chairman</h1>
                <div className="chairman">
                  <br />
                  <div>
                    <img
                      src="assets/img/sachinksingh.jpg"
                      alt="vice_cr2"
                      className="chairman_image"
                    />
                  </div>
                  <br />
                  <div>
                    <b>Dr. Sachin Kumar Singh</b>
                    <br />
                    Phone: +91-326-2295184, 2235176,
                    <br /> Mobile: +91-9102991041
                    <br />
                    Email: cdc@iitism.ac.in
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div align="center">
            <div>
              <h1>Students' Coordinator Placement Team (SCPT)</h1>
            </div>
            <div className="scpt">
              <div className="chairman">
                <br />
                <div>
                  <img
                    src="assets/img/scpt1.jpeg"
                    alt="scpt1"
                    className="chairman_image"
                  />
                </div>
                <br />
                <br />
                <div>
                  <b>Prithvi Singh Chauhan</b>
                  <br />
                  Mobile: +91-8030281193
                </div>
              </div>
              <br />
              <div className="chairman">
                <br />
                <div>
                  <img
                    src="assets/img/scpt2.jpeg"
                    alt="scpt2"
                    className="chairman_image"
                  />
                </div>
                <br />
                <br />
                <div>
                  <b>Rishabh Ranjan</b>
                  <br />
                  Mobile: +91-9934615950
                </div>
              </div>
              <br />
              <div className="chairman">
                <br />
                <div>
                  <img
                    src="assets/img/scpt3.jpg"
                    alt="scpt3"
                    className="chairman_image"
                  />
                </div>
                <br />
                <br />
                <div>
                  <b>Abhinav Bajpai</b>
                  <br />
                  Mobile: +91-8827524158
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}
