import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import WhyRecruit from './why_recruit';
import Message from './Message';
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
            </div>
        )
    }
}

export default ForCompanies;