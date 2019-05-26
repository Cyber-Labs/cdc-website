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
			    <div class="slideshow-container">

  
				  <div class="mySlides fade">
				    <div class="numbertext">1 / 3</div>
				    <img src="assets/img/img556.jpg"  />
				    <div class="text">Img 1</div>
				  </div>

				  <div class="mySlides fade">
				    <div class="numbertext">2 / 3</div>
				    <img src="assets/img/img559.jpg"  />
				    <div class="text">Img Two</div>
				  </div>

				  <div class="mySlides fade">
				    <div class="numbertext">3 / 3</div>
				    <img src="assets/img/img560.jpg" />
				    <div class="text">Img Three</div>
				  </div>

				 
				  <a class="prev" onClick={()=>this.showSlides(-1)}>&#10094;</a>
				  <a class="next" onClick={()=>this.showSlides(1)}>&#10095;</a>
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