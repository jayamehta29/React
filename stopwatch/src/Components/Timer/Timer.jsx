import React, { Component } from 'react'
import './Timer.css';
class Timer extends Component{
    constructor(props){
        super(props);
        // state={}
    }


    render(){
        return(
            <div className="timer">
                <div className="time">
                    <div>{this.props.hr}</div>.
                    <div>{this.props.min}</div>.
                    <div>{this.props.sec}</div>.
                    <div>{this.props.msec}</div>
                </div>
            </div>

        ); 
        
    }
}

export default Timer;