import React from 'react';
import './Alumni.css';
import Header from './Header';
import AlumniVisit from './alumniVisit';
import Experience from './experience';
import Footer from './footer';

export default class Alumni extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <AlumniVisit />
                <Experience />
                <Footer />
            </div>
        )
    }
}