import React from 'react';
import ReactDOM from 'react-dom';
import Hiring from './hiring';
import Footer from './footer';
import Policy from './policies';


class App extends React.Component{
	render(){
		return(
		<div>
		<Hiring />
		<Footer />
		<Policy />
		</div>
	);
  }

}

ReactDOM.render(<App />,document.getElementById('root'));