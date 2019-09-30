import React from "react";
import "./RegistrationAndBrochure.css";
import ITable from "../Home/ITable";
import PTable from "../Home/PTable";
import Popup from "reactjs-popup";
import { HashLink as Link } from 'react-router-hash-link';

class RegistrationAndBrochure extends React.Component {
  render() {
    return (
      <div>
        <div className="mainp">
          <div className="box1p">
            <div className="box11p">
              <h1>Registration</h1>
              <hr />
            </div>
            <div className="box12p">
              <div>
                <p>
                  The Training & Placement Cell invites Companies to visit
                  IIT (ISM) and conduct the process to offer Full Time to the
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
              <Link to='/dummylink#/'><button type="submit">Download JNF(Job Notification Form)</button></Link>
              <Link to='/dummylink#/'><button type="submit">Download INF(Internship Notification Form)</button></Link>
            </div>

          </div>
          <div className="box2p">
            <div className="box21p">
              <div className="box11p">
                <h1>Placement Brochure</h1>
                <hr />
              </div>
              <div align="middle">
              <div className="btn">
                <a href="https://drive.google.com/file/d/1ff1WC_x7XKC9fRBNwYFv33CoiyQo9h0N/view" target="_blank" rel="noreferrer">
                <button type="submit" >
                  Download
                </button>
                </a>
              </div>
              
              <Popup trigger={<button> Internship Calendar</button>} position="bottom left">
                  <div><ITable/></div>
              </Popup>
              <Popup trigger={<button> Placement Calendar</button>} position="bottom left">
                  <div><PTable/></div>
              </Popup>
                </div>
              
              
            </div>
            <div className="box22p">
                <img src="assets/img/placementbrochure.jpg" className="imagepb" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RegistrationAndBrochure;
