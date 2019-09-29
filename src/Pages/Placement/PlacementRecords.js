import React from "react";
import Button from "react-bootstrap/Button";
import './PlacementRecords.css';

class PlacementRecords extends React.Component{
    render(){
        return(
            <div>
                <center>
                    <h3>Yearwise Placement Statistics</h3>
                </center>
                <div className="records">
                <div className="row">
                 <div className="element"> 
                <a href="https://www.iitism.ac.in/oldsite/result/2007.pdf" target="_blank" rel="noreferrer">
                <Button variant="primary" size="sm">2007</Button>
                </a>
                </div>
                <div className="element">
                <a href="https://www.iitism.ac.in/oldsite/result/2008.pdf" target="_blank" rel="noreferrer">
                <Button variant="primary" size="sm">2008</Button>
                </a>
                </div>
                <div className="element">
                <a href="https://www.iitism.ac.in/oldsite/result/2009.pdf" target="_blank" rel="noreferrer">
                <Button variant="primary" size="sm">2009</Button>
                </a>
                </div>
                <div className="element">
                <a href="https://www.iitism.ac.in/oldsite/result/2010.pdf" target="_blank" rel="noreferrer">
                <Button variant="primary" size="sm">2010</Button>
                </a>
                </div>
                </div>
                <div className="row">
                    <div className="element">
                <a href="https://www.iitism.ac.in/oldsite/result/2011.pdf" target="_blank" rel="noreferrer">
                <Button variant="primary" size="sm">2011</Button>
                </a>
                </div>
                <div className="element">
                <a href="https://www.iitism.ac.in/oldsite/result/2012.pdf" target="_blank" rel="noreferrer">
                <Button variant="primary" size="sm">2012</Button>
                </a>
                </div>
                <div className="element">
                <a href="https://www.iitism.ac.in/oldsite/result/2013.pdf" target="_blank" rel="noreferrer">
                <Button variant="primary" size="sm">2013</Button>
                </a>
                </div>
                <div className="element">
                <a href="https://www.iitism.ac.in/oldsite/result/2014.pdf" target="_blank" rel="noreferrer">
                <Button variant="primary" size="sm">2014</Button>
                </a>
                </div>
                </div>
                <div className="row">
                    <div className="element">
                <a href="https://www.iitism.ac.in/oldsite/result/2015.pdf" target="_blank" rel="noreferrer">
                <Button variant="primary" size="sm">2015</Button>
                </a>
                </div>
                <div className="element">
                <a href="https://www.iitism.ac.in/oldsite/result/2016.pdf" target="_blank" rel="noreferrer">
                <Button variant="primary" size="sm">2016</Button>
                </a>
                </div>
                <div className="element">
                <a href="https://www.iitism.ac.in/oldsite/result/2017.pdf" target="_blank" rel="noreferrer">
                <Button variant="primary" size="sm">2017</Button>
                </a>
                </div>
                <div className="element">
                <a href="https://www.iitism.ac.in/oldsite/result/2018.pdf" target="_blank" rel="noreferrer">
                <Button variant="primary" size="sm">2018</Button>
                </a>
                </div>
                </div>
                <div className="row">
                    <div className="element">
                <a href="https://www.iitism.ac.in/oldsite/result/2019.pdf" target="_blank" rel="noreferrer">
                <Button variant="primary" size="sm">2019</Button>
                </a>
                </div>
                </div>
                </div>
                <br />
            </div>
        );
    }
}

export default PlacementRecords;