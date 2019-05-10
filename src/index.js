import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';
import App from './home';
import ForCompanies from './For_companies';
import Not_found from './404_not_found';
import Alumni from './Alumni';
import Header from './Header';
import Message from './Message';
import About from './About';
import Page from './Page';
import Policy from './Policy';
import PastRecruiter from './PastRecruiter';
import ReachUs from './ReachUs';
import ContactUs from './contact-us';

const routing = (
    <Router>
      <div>
          <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/for-companies" component={ForCompanies} />
        <Route exact path="/for-alumni" component={Alumni} />
        <Route exact path="/policies" component={Policy} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route component = {Not_found} />
        </Switch>
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root')) 
// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Header />
//                 <About />
//                 <Message />
//                 <Page />
//                 <Policy />
//                 <PastRecruiter />
//                 <ReachUs />
//             </div>
//         )
//     }
// }
// ReactDOM.render(<App/>,document.querySelector('#root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

