import React from "react";
import PlacementRecords from "./PlacementRecords";
import Recruiters from "./Recruiters";
import example from "../example";

class Placement extends React.Component{
    render(){
        return(
            <div>
            <PlacementRecords />
            <br />
            <Recruiters />
            </div>
        );
    }
}

export default Placement;