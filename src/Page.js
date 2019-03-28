import React from 'react';
import ReactDOM from 'react-dom';
import './Page2.css';

class Page extends React.Component {
    render() {
        return (
            <div>
                <div class="main">
                    <div class="box1">
                        <div class="box11"><h1>Registration</h1><hr /></div>
                        <div class="box12"><div><p>The Training & Placement Cell invites Companies to visit IIT(ISM) and conduct the process to offer Full Time to the students.<br />The T&P Cell provides the link to download the Job Notification Form(JNF)& Internship Notification Form(INF). The JNF and/or INF needs to be filled in by the company. The completed form(s) to be sent, through Email(tp@iitism.ac.in), to the T&P Cell.</p></div>
                            <div><p>The companies which did not receive an invitaion from the T&P Cell can also follow the above mentioned procedure for submission of JNF and/or INF.</p></div>
                        </div>
                        <div align="middle"><button type="submit">Register</button></div>
                    </div>
                    <div class="box2">
                        <div class="box21">
                            <div class="box11"><h1>Placement Brochure</h1><hr /></div>
                            <div align="middle"><a href="#">Internship Calendar(HL)</a><br /><a href="#">Registration Portal(HL)</a></div>
                            <div align="middle"><button class="btn" type="submit">Download</button></div>
                        </div>
                        <div class="box22">
                            <div class="image"><img src="" /></div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Page;