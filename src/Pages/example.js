import React from "react";
import "./example.css";
import { HashLink as Link } from 'react-router-hash-link';

export default class example extends React.Component{
    render(){
        return(
            <div className="carousel-wrapper" style={{height: "400px"}}>
              {/*<span id="target-item-1"></span>
              <span id="target-item-2"></span>
        <span id="target-item-3"></span>*
        <div className="carousel-item item-1" style={{backgroundColor: "#C2C2C8"}}>*/}
                <h2>Item 1</h2>
                <p>Content goes here.</p>
                {/*<Link to='#target-item-3' className="arrow arrow-prev" />
                <Link to='#target-item-2' className="arrow arrow-next" />
              </div>
              <div className="carousel-item item-2 light" style={{backgroundColor: "royalblue"}}>
                <h2>Item 2</h2>
                <p>Content goes here.</p>
                <Link to='#target-item-1' className="arrow arrow-prev" />
                <Link to='#target-item-3' className="arrow arrow-next" />
              </div>
              <div className="carousel-item item-3" style={{backgroundColor: "aliceblue"}}>
                <h2>Item 3</h2>
                <p>Content goes here.</p>
                <Link to='#target-item-2' className="arrow arrow-prev" />
        <Link to='#target-item-1' className="arrow arrow-next" />
    </div> */}
            </div>
        );
    }
}