import React, { Component } from 'react';

class LapRecordDisplay extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="laps">
                <h1>LAP RECORD</h1>
                {this.props.currLap.msec!=null?<div className="laprecord">{(this.props.currLap.hr) + "." + (this.props.currLap.min) + "." + (this.props.currLap.sec) + "." + (this.props.currLap.msec)}</div>:""}
                
            </div>
        );
    }
}

export default LapRecordDisplay;