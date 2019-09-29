import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel'

import './CompanyNames.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
        return(
          <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
          <div style={{height: "500px", backgroundColor: "#C2C2C8"}}>
          <Carousel.Item>
            <Carousel.Caption>
              <h1>First slide label</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          </div>
          <div style={{height: "500px", backgroundColor:"#C2C2C8"}}>
          <Carousel.Item>
    
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          </div>
          <div style={{height: "500px", backgroundColor: "#C2C2C8"}}>
          <Carousel.Item>
    
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          </div>
        </Carousel>
     );
    }

export default class CompanyNames extends React.Component{
  render(){
    return(
      <div>
      <ControlledCarousel />
      <br />
      </div>
    );
  }
}