import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './Headerc.css';

class Header extends React.Component {
    render() {
        return (
            <div> <div class="flex-container">
                <div class="image"> <a href="https://www.iitism.ac.in/" target="_blank"><img class="img" src="https://www.iitism.ac.in/assets/img/ismlogo.png" /></a></div>
                <div class="flex-container2">
                    <div class="L1">Career Development Cell</div>
                    <div class="L2">Indian Institute Of Technology(Indian School Of Mines) Dhanbad</div>
                </div>

            </div>
                <div>
                    <nav >
                        <ul class="header_nav">
                            <li><Link to ="/">Home</Link></li>
                            <li><Link to="/for-companies">For Companies</Link></li>
                            <li><Link to="/for-students">For Students</Link></li>
                            <li><Link to="/for-alumni">For Alumini</Link></li>
                            <li><Link to="/policies">Policies</Link></li>
                            <li><Link to="/placement-stats">Placement Stats</Link></li>
                            <li><Link to="/contact-us">Contact Us</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
export default Header;