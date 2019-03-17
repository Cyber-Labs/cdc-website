import React from 'react';
import ReactDOM from 'react-dom';
import Campus_Rec from './campus_rec';
import Hiring from './hiring';
import Footer from './footer';


class App extends React.Component{
	render(){
		return(
		<div>
		<Campus_Rec />
		<Hiring />
		<Footer />
		</div>
	);
  }

}

ReactDOM.render(<App />,document.getElementById('root'));