import React from 'react';
import ReactDOM from 'react-dom';
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
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">For Companies</a></li>
                            <li><a href="#">For Students</a></li>
                            <li><a href="#">For Alumini</a></li>
                            <li><a href="#">Policies</a></li>
                            <li><a href="#">Placement Stats</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
export default Header;