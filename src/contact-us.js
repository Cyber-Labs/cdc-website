import React from 'react';
import img1 from './chairman.jpg';
import img2 from './pankajjain.jpg';
import Header from './Header';
import Footer from './footer';
import './contact-us.css'


export default class ContactUs extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <div class="contact_main">
                    <div align="center">
                        <div><h1>Chairman</h1></div>
                        <div class="chairman">
                            <br />
                            <div><img src={img1} alt="chairman_cdc" class="chairman_image" /></div>
                            <div><b>Prof Satish Kumar Sinha</b><br />Phone: +91-326-2235208, 2235231, Mobile: +91-8002114960, 7808337799 <br />Email: cdc@iitism.ac.in</div>
                        </div>
                    </div>
                    <div align="center">
                        <div><h1>Vice Chairman</h1></div>
                        <div class="vice_chairman">
                        <div class="chairman">
                            <br />
                            <div><img src={img2} alt="vice_cr1" class="chairman_image" /></div>
                            <div><b>Dr. Pankaj Kumar Jain</b><br />Phone: +91-326-2235803,<br /> Mobile: +91-7766904994<br />Email: cdc@iitism.ac.in</div>
                        </div>
                        <div class="chairman">
                            <br />
                            <div><img src={img1} alt="vice_cr2" class="chairman_image" /></div>
                            <div><b>Dr. Sachin Kumar Singh</b><br />Phone: +91-326-2295184, 2235176, Mobile: +91-9102991041<br />Email: cdc@iitism.ac.in</div>
                        </div>
                        </div>
                    </div>
                    <div align="center">
                        <div><h1>Students' Coordinator Placement Team (SCPT)</h1></div>
                        <div class="scpt">
                        <div class="chairman">
                            <br />
                            <div><img src={img1} alt="scpt1" class="chairman_image" /></div>
                            <br />
                            <div>Prithvi Singh Chauhan<br />Mobile: +91-8030281193</div>                           
                        </div>
                        <div class="chairman">
                            <br />
                            <div><img src={img1} alt="scpt2" class="chairman_image" /></div>
                            <br />
                            <div>Rishabh Ranjan<br />Mobile: +91-9934615950</div>
                        </div>
                        <div class="chairman">
                            <br />
                            <div><img src={img1} alt="vice_cr1" class="chairman_image" /></div>
                            <br />
                            <div>Abhinav Bajpai<br />Mobile: +91-8827524158</div>
                        </div>
                        </div>
                        <br />
                        <br />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}