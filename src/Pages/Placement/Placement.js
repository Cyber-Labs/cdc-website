import React from "react";
import PlacementRecords from "./PlacementRecords";
import Recruiters from "./Recruiters";


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