import React from "react";
import "./ReachUs.css";

class ReachUs extends React.Component {
  render() {
    return (
      <div className="colorback">
        <h1 align="middle"><b>Reach Us</b></h1>
        <div className="mainbox">
          <div className="transport">
            <div className="byrail">
              <h1>By Rail</h1>
              <p>
                Dhanbad Junction station code DHN is headquarters of the Dhanbad Rail Division of the East Central Taiyari Railway zone.
                It is the largest railway station in Jharkhand,handling over 100 trains and 100,000+ passengers everyday. 
                As one of the largest and busiest railway junctions, it has direct trains from all major cities of the country.<br/>
                <b>Distance of campus</b> from Railway station: <b>3 km</b>.
              </p>
            </div>
            <div className="byrail">
              <h1>By Air</h1>
              <p>
                Though the city of Dhanbad does not have any airport, it is
                extremely well connected to the cities of Kolkata, Ranchi which
                have functional International and Domestic Airports for flights
                to all corners of the country on a daily basis.
                <br />
                Nearest Airports:
                <br />
                Kolkata: 270 km from Dhanbad. Ranchi:146 Km from Dhanbad
              </p>
            </div>
          </div>
          <div className="boarding">
            <b>Boarding Facilities:</b>
            <br />
            AC accomodation is provided inside the campus(Executive Development
            Centre/Senior Academic Hostel) on twin sharing basis(If Available).
            Other Hotels near to ISM where Accomodation is available are given
            below{" "}
          </div>
          
          <div className="hotels">
            <div className="sonotel">
              <h1>Sonotel Hotel(3 Star)</h1>
              <p>
                Contact details: +91 326 220 2222,220 3333,220 4444
                <br />
                Email: reservations@sonotelhotels.com
                <br />
                The hotel is approximately 5KM from railway station.
                <br />
                The distance between hotel and our Institute is around 5KM.
              </p>
            </div>
            <br />
            <div className="sonotel">
              <h1>Hotel Cocoon(3 Star)</h1>
              <p>
                Contact details: 0326 2313-300/500/700, 0326-2220-100/200/300
                <br />
                Email: reservations@hotelsushantinternational.com
                <br />
                The hotel is approximately .5KM from railway station.
                <br />
                The distance between hotel and our Institute is around 3KM.
              </p>
            </div>
          </div>
          <div className="hotels">
            <div className="sonotel">
            <h1>The Seventeen Degrees Hotel</h1>
              <p>
                Contact Details: 0326-2303869/2304602, 9234669201, 9234669205
                <br />
                Fax: 0326-2308499,
                <br />
                Email: 17degreeshotel@gmail.com
                <br />
                The hotel is approximately 5KM from railway station.
                <br />
                The distance between hotel and our Institute is around 8KM.
              </p>
              
            </div>
            <br />
            <div className="sonotel">
            <h1>Hotel Skylark</h1>
              <p>
                Contact Details: 0326-2305384, 2305121, 2300682
                <br />
                Fax No: 0326-2307772
                <br />
                Email: skylarkhotels@johaigroup.com
                <br />
                The hotel is approximately 4KM from railway station.
                <br />
                The distance between hotel and our Institute is around 7KM.
              </p>
              
            </div>
          </div>
          <div className="boarding">
            <b>Executive Development Centre(EDC)</b>
            <br />
            The recruitment process is carried out in Executive Development
            Center which is located opposite to the Senior Academic Hostel. It
            is about 200m from the main gate.
            <br />
            <br />
            <b>Facilities at the Placement Office</b>
            <br />
            The placement office is well equipped and is designed to smoothly
            handle and support the placement procedure at every stage.
            Arrangements for pre-placement talks, group discussions and
            interviews are handled by the staff at the placement office. We are
            equipped with the following facilities to aid the process:<br/>
              (a) Well furnished, air-conditioned rooms for interviews and group
              discussions.<br />
              (b) Auditoriums close to the office to conduct pre-placement talks and
              tests.<br />
              (c) Video conferencing facility for conducting interviews.<br />
              (d) Student placement volunteers to assist on the day of visit and
              through the selection process.<br />
            
          </div>
        </div>
      </div>
    );
  }
}
export default ReachUs;
