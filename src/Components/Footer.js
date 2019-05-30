import React from 'react';
import './Footer.css';
import { HashLink as Link } from 'react-router-hash-link';

class Footer extends React.Component{
	render(){
		return(
			<div>
			<div className="main_flex">
			 <div className="flex_abcd">
				<div className="flex_image">
				 <div><a href="https://www.iitism.ac.in/" target="_blank"><img src="https://www.iitism.ac.in/assets/img/ismlogo.png"/></a></div>
				 <div className="cdc">Career Development <br/>Centre,<br/>IIT(ISM)Dhanbad</div>
				</div>
				<div className="flex_home">
				<div><Link to='/#/'>Home</Link></div>
				<div><Link to='/for-companies#/'>For Companies</Link></div>
				<div><Link to='/for-students#/'>For students</Link></div>
				<div><Link to='/for-alumni#/'>For Alumni</Link></div>
				<div><Link to='/policies#/'>Policies</Link></div>
				<div><Link to='/placement-stats#/'>Placement Stats</Link></div>
				<div><Link to="/contact-us#/">Contact Us</Link></div>

				</div>
				</div>
				<div className="flex_quicklinks">
				<div><b>Quick Links</b></div>
				<div><a href="#">Registration Portal</a></div>
				<div><a href="#">AIPC Guidelines</a></div>
				<div><a href="#">Brochure</a></div>
				<div><Link to='/contact-us#cr1'>Contact Chairman</Link></div>
				<div><Link to='/contact-us#/'>Contact CDC Office</Link></div></div>
				<div className="flex_downloads">
					<div><b>Downloads</b></div>
					 <div><a href="https://www.iitism.ac.in/pdfs/academics/AC.pdf" target="_blank">Download1</a></div>
					 <div><a href="https://www.iitism.ac.in/pdfs/academics/AC.pdf" target="_blank">Download2</a></div>
					 <div><a href="https://www.iitism.ac.in/pdfs/academics/AC.pdf" target="_blank">Download3</a></div>
					 <div><a href="https://www.iitism.ac.in/pdfs/academics/AC.pdf" target="_blank">Download4</a></div>
					 <div><a href="https://www.iitism.ac.in/pdfs/academics/AC.pdf" target="_blank">Download5</a></div>
				 </div>

				<div className="flex_contacts">
				 <div className="flex_address">
				  <div>Career Development Centre,</div>
					<div>Executive Development Center(EDC),</div>
					<div>IIT(ISM)Dhanbad,</div>
					<div>Dhanbad-826001,Jharkhand</div>
				</div>
				 <div className="flex_email">
				 <div><b>Email</b></div>
				 <div>cdc@iitism.ac.in</div>
				 </div>
				</div>
			</div>
			</div>
			// <div className="flex-container-f">
			//   <div className="flex-1f">
			//      <div className="flex-container-f1">
			//         <div>
			//           <a href="https://www.iitism.ac.in/" target="_blank"><img src="https://www.iitism.ac.in/assets/img/ismlogo.png"/></a>
			//         </div>
			//         <div>
			//           <br/>Career Development <br/>Centre,<br/>IIT(ISM)Dhanbad
			//         </div>
			//      </div>
			//   </div>
			//   <div className="flex-2f">
			//         <div><a href="#"><Link to='/'>Home</Link></a></div>
			//         <div><a href="#"><Link to='/for-companies'>For Companies</Link></a></div>
			//         <div><a href="#"><Link to='/for-students'>For Students</Link></a></div>
			//         <div><a href="#"><Link to='/for-alumni'>For Alumni</Link></a></div>
			//         <div><a href="#"><Link to='/placement-stats'>Placement Stats</Link></a></div>
			//         <div><a href="#"><Link to='/policies'>Policies</Link></a></div>
			//         <div><a href="#"><Link to='/contact-us'>Contact Us</Link></a></div>
			//   </div>
			//   <div className="flex-3f">
			//         <div className="headingquick"><b>Quick Links</b></div>
			//         <div className="link"><a href="#">Quick Link 2</a></div>
			//         <div className="link"><a href="#">Quick Link 2</a></div>
			//         <div className="link"><a href="#">Quick Link 2</a></div>
			//         <div className="link"><a href="#">Quick Link 2</a></div>
			//         <div className="link"><a href="#">Quick Link 2</a></div>
			//         <div className="link"><a href="#">Quick Link 2</a></div>
			//   </div>
			  
			//   <div className="flex-4f">
			//         <div>Career Development Centre.</div>
			//         <div>Executive Development Center(EDC),</div>
			//         <div>IIT(ISM)Dhanbad</div>
			//         <div>Dhanbad-826001,Jharkhand</div>
			//         <div><p></p></div>
			//         <div><p></p></div>
			//         <div><b>Email</b><br/></div>
			//         <div>cdc@iitism.ac.in</div>
			//   </div>


			// </div>

		);
	}
}

export default Footer;