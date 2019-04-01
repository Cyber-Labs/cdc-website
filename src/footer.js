import React from 'react';
import ReactDOM from 'react-dom';
import './footer1.css';
import {Link} from 'react-router-dom';

class Footer extends React.Component{
	render(){
		return(
			<div className="flex-container-f">
			  <div className="flex-1f">
			     <div className="flex-container-f1">
			        <div>
			          <a href="https://www.iitism.ac.in/" target="_blank"><img src="https://www.iitism.ac.in/assets/img/ismlogo.png"/></a>
			        </div>
			        <div>
			          <br/>Career Development <br/>Centre,<br/>IIT(ISM)Dhanbad
			        </div>
			     </div>
			  </div>
			  <div className="flex-2f">
			        <div><a href="#"><Link to='/'>Home</Link></a></div>
			        <div><a href="#"><Link to='/for-companies'>For Companies</Link></a></div>
			        <div><a href="#"><Link to='/for-students'>For Students</Link></a></div>
			        <div><a href="#"><Link to='/for-alumni'>For Alumni</Link></a></div>
			        <div><a href="#"><Link to='/placement-stats'>Placement Stats</Link></a></div>
			        <div><a href="#"><Link to='/policies'>Policies</Link></a></div>
			        <div><a href="#"><Link to='/contact-us'>Contact Us</Link></a></div>
			  </div>
			  <div className="flex-3f">
			        <div className="headingquick"><b>Quick Links</b></div>
			        <div className="link"><a href="#">Quick Link 2</a></div>
			        <div className="link"><a href="#">Quick Link 2</a></div>
			        <div className="link"><a href="#">Quick Link 2</a></div>
			        <div className="link"><a href="#">Quick Link 2</a></div>
			        <div className="link"><a href="#">Quick Link 2</a></div>
			        <div className="link"><a href="#">Quick Link 2</a></div>
			  </div>
			  
			  <div className="flex-4f">
			        <div>Career Development Centre.</div>
			        <div>Executive Development Center(EDC),</div>
			        <div>IIT(ISM)Dhanbad</div>
			        <div>Dhanbad-826001,Jharkhand</div>
			        <div><p></p></div>
			        <div><p></p></div>
			        <div><b>Email</b><br/></div>
			        <div>cdc@iitism.ac.in</div>
			  </div>


			</div>

		);
	}
}

export default Footer;