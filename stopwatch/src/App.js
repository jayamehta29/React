import React, { Component } from 'react'

import Timer from './Components/Timer/Timer.jsx'
import PauseBtn from './Components/PauseBtn/PauseBtn.jsx'
import StartBtn from './Components/StartBtn/StartBtn.jsx'
import ResetBtn from './Components/ResetBtn/ResetBtn.jsx'
import LapBtn from './Components/LapBtn/LapBtn.jsx'

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
    })
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
      lap: [...this.state.lap, this.state.hr,
      this.state.min,
      this.state.sec,
      this.state.msec,],

      lapClicked: !(this.state.lapClicked),
    })
    console.log(this.state.lap);

    // {
    //   (this.state.lap).size != 0 ? (<div className="lap">
    //     <h1>time laps</h1>
    //   </div>) : ""
    // }


  }

  render() {
    let { hr, min, sec, msec, flag, lapClicked, lap } = this.state;
    return (
      <>

        <div className="main">
          <Timer hr={hr} min={min} sec={sec} msec={msec} />

          {flag ?
            <PauseBtn handlePause={this.handlePause} /> :
            <StartBtn handleStart={this.handleStart} />
          }

          <ResetBtn handleReset={this.handleReset} />
          <LapBtn handleLap={this.handleLap} lap={lap}>

          </LapBtn>

        </div>
        <div className="laps">
            <h1>time laps</h1>
          </div>

      </>
    );
  }
}


export default App;
