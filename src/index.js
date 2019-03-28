import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Message from './Message';
import About from './About';
import Page from './Page';
import Policy from './Policy';
import PastRecruiter from './PastRecruiter';
import ReachUs from './ReachUs';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <About />
                <Message />
                <Page />
                <Policy />
                <PastRecruiter />
                <ReachUs />
            </div>
        )
    }
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

