import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import WhyRecruit from './why_recruit';
import Message from './Message';
import Footer from './footer';
import About from './About';
import Page from './Page';
import Policy from './Policy';
import PastRecruiter from './PastRecruiter';
import ReachUs from './ReachUs';
 
class ForCompanies extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <WhyRecruit />
                <Page />
                <PastRecruiter />
                <ReachUs />
                <Footer />
            </div>
        )
    }
}

export default ForCompanies;