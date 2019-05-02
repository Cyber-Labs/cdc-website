import React from 'react';
import ReactDOM from 'react-dom';
import './hiring1.css';

class Hiring extends React.Component {
	render() {
		return (
			<div className="main">
				<div className="box">
					<div className="flexd">
						<div align="middle" className="heading"><p><b>For hiring of FTEs/Interns(2/6 months)</b></p><hr /></div>
						<div className="flexlink">

							<div><a href="#">Internship Calender</a></div>
							<div><a href="#">Placement Calender</a></div>
						</div>

						<div align="middle">The Preplacement Talks will be commencing from 1st weeek of october</div>
						<div align="middle">The recruitment season will start from 1st of December and the process will continue upto May 2019</div>
						<div><p></p></div>
						<div align="middle">
							<button type="submit">Register</button><p></p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Hiring;