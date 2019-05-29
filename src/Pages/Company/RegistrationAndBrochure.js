import React from "react";
import "./RegistrationAndBrochure.css";
import ITable from "../Home/ITable";
import PTable from "../Home/PTable";
import Popup from "reactjs-popup";

class RegistrationAndBrochure extends React.Component {
  render() {
    return (
      <div>
        <div class="mainp">
          <div class="box1p">
            <div class="box11p">
              <h1>Registration</h1>
              <hr />
            </div>
            <div class="box12p">
              <div>
                <p>
                  The Training & Placement Cell invites Companies to visit
                  IIT(ISM) and conduct the process to offer Full Time to the
                  students.
                  <br />
                  The T&P Cell provides the link to download the Job
                  Notification Form(JNF)& Internship Notification Form(INF). The
                  JNF and/or INF needs to be filled in by the company. The
                  completed form(s) to be sent, through Email(tp@iitism.ac.in),
                  to the T&P Cell.
                </p>
              </div>
              <div>
                <p>
                  The companies which did not receive an invitaion from the T&P
                  Cell can also follow the above mentioned procedure for
                  submission of JNF and/or INF.
                </p>
              </div>
            </div>
            <div align="middle">
              <button type="submit">Register</button>
            </div>
          </div>
          <div class="box2p">
            <div class="box21p">
              <div class="box11p">
                <h1>Placement Brochure</h1>
                <hr />
              </div>
              <div class="btn" align="middle">
                <a href="https://www.iitism.ac.in/pdfs/tnp/Placement-Brochure.pdf" target="_blank">
                <button type="submit" >
                  Download
                </button>
                </a>
              </div>
              <div align="middle">
              <Popup trigger={<button> Internship Calendar</button>} position="bottom center">
                  <div><ITable/></div>
              </Popup>
              <Popup trigger={<button> Placement Calendar</button>} position="bottom center">
                  <div><PTable/></div>
              </Popup>
                </div>
              
              
            </div>
            <div class="box22p">
                <img src="assets/img/placementbrochure.jpg" class="imagepb" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RegistrationAndBrochure;
