import React, { Component } from 'react'

import Timer from './Components/Timer.jsx'
import PauseBtn from './Components/PauseBtn.jsx'
import StartBtn from './Components/StartBtn.jsx'
import ResetBtn from './Components/ResetBtn.jsx'
import LapBtn from './Components/LapBtn.jsx'
import LapRecordDisplay from './Components/LapRecordDisplay.jsx'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      hr: 0,
      min: 0,
      sec: 0,
      msec: 0,
      lap: [],
      currLap:{},
      // lapClicked:false
    }
    
  }


  handleReset = () => {
    console.log("reset");
    this.setState({
      flag: false,
      hr: 0,
      min: 0,
      sec: 0,
      msec: 0,
      currLap:{}
    })
    clearInterval(this.myinterval);
  }

  handlePause = () => {
    console.log("pause");
    this.setState({
      flag: false,
    })
    clearInterval(this.myinterval);
  }

  handleStart = () => {
    console.log("start");
    this.setState({
      flag: true,

    })

    this.myinterval = setInterval(() => {
      this.setState({
        msec: this.state.msec + 1
      });

      if (this.state.msec == '100') {
        this.setState({
          sec: this.state.sec + 1,
          msec: 0
        })
      }
      if (this.state.sec == '60') {
        this.setState({
          min: this.state.min + 1,
          sec: 0
        })
      }

      if (this.state.min == '60') {
        this.setState({
          hr: this.state.hr + 1,
          min: 0
        })
      }
    }, 10);
  }

 


  handleLap = () => {

    this.setState({
      lap: [...this.state.lap, {hr:this.state.hr,min:this.state.min,sec:this.state.sec,msec:this.state.msec},],
      currLap: {hr:this.state.hr,min:this.state.min,sec:this.state.sec,msec:this.state.msec},
    })
    // let currLap=[];

    this.state.lap.push(this.state.currLap);

    console.log(this.state.lap);
    console.log(this.state.currLap);
  }

  render() {
    let { hr, min, sec, msec, flag, currLap } = this.state;
    return (
      <>

        <div className="main">
          <Timer hr={hr} min={min} sec={sec} msec={msec} />

          {flag ?
            <PauseBtn handlePause={this.handlePause} /> :
            <StartBtn handleStart={this.handleStart} />
          }

          <ResetBtn handleReset={this.handleReset} />
          <LapBtn handleLap={this.handleLap} />
          <LapRecordDisplay onClick={this.handleLap} currLap={currLap} LAP RECORD/>
          {/* <div className="laps">
            <h1>LAPS RECORD</h1>
          </div> */}
        </div>
      </>
    );
  }
}


export default App;
