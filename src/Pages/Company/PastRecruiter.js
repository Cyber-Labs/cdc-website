import React from "react";
import "./PastRecruiter.css";

var slideIndex=1;
class PastRecruiter extends React.Component {
	constructor(props){
		super(props);
		this.showSlides=this.showSlides.bind(this);

		this.state={
			n:0
		};
	}
	
    showSlides(n) {
    	    slideIndex+=n;
    		var i;  
    		var slides = document.getElementsByClassName("mySlides");
     		if (n > slides.length) {slideIndex = 1} 
  			if (n < 1) {slideIndex = slides.length}
  			for (i = 0; i < slides.length; i++) {
      			slides[i].style.display = "none"; 
  			}
  			
  			slides[slideIndex-1].style.display = "block"; 
  			
		}
	render(){
		return(
			<div>
			    <div className="slideshow-container">

  
				  <div className="mySlides fade">
				    <div className="numbertext">1 / 3</div>
				    <img src="assets/img/img556.jpg"  />
				    <div className="text">Img 1</div>
				  </div>

				  <div className="mySlides fade">
				    <div className="numbertext">2 / 3</div>
				    <img src="assets/img/img559.jpg"  />
				    <div className="text">Img Two</div>
				  </div>

				  <div className="mySlides fade">
				    <div className="numbertext">3 / 3</div>
				    <img src="assets/img/img560.jpg" />
				    <div className="text">Img Three</div>
				  </div>

				 
				  <a className="prev" onClick={()=>this.showSlides(-1)}>&#10094;</a>
				  <a className="next" onClick={()=>this.showSlides(1)}>&#10095;</a>
				</div>
			</div>



		)
	}
}


export default PastRecruiter;



/*
constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      justClicked: 'f',
      letters: Array.from({length: 26}, (_, i) => String.fromCharCode(A + i))
    };
  }
  handleClick(letter) {
    this.setState({ justClicked: letter });
  }
  render() {
    return (
      <div>
        Just clicked: {this.state.justClicked}
        <ul>
          {this.state.letters.map(letter =>
            <li key={letter} onClick={() => this.handleClick(letter)}>
              {letter}
            </li>
          )}
        </ul>
      </div>
    )
  }
*/