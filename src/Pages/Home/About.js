import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div className="background">
        <div>
          <img src="assets/img/Campus.jpeg" className="image3" />
        </div>
        <div className="about-text">
          <h1>About IIT(ISM),Dhanbad</h1>
          <div>
            Indian Institute of Technology(Indian School Of Mines) Dhanbad
            formerly known as ISM Dhanbad was set up by the Government of India
            and was formally Inaugrated by his Excellency the Viceroy Lord Irvin
            on 9th December, 1926 on the model of Royal School Of Mines, London.
            <br /> Endowed with the highest quality of teaching and learning,
            the graduates, post graduates and research scholars are always ready
            to tackle all challenges to take their place as deicated
            professionals in various industries in India and abroad. What
            started as an institution to impart mining education has graduated
            into a full fledged technical institution of international acclaim
            offering programs like B.Tech, Dual Degree, Integrated M.Sc,
            Integrated M.Sc.Tech, M.tech, M.Phil and MBA. In addition the
            institute offers full as well as part time Ph.D programmes and
            Post-Doctoral Fellowship(PDF).{" "}
          </div>
        </div>
      </div>
    );
  }
}
export default About;
