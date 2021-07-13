import React, { Component } from 'react';
import CustomButton from './components/CustomButton';
import './App.css';

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      val: 0,
    };
  } 

  inc=()=>{
    this.setState({
      val:this.state.val+1,
    })
  }

  dec=()=>{
    this.setState({
      val:this.state.val-1,
    })
  }

  reset=()=>{
    this.setState({
      val: 0,
    })
  }

render() { 
  return ( 
    <>
      <h1>COUNTER</h1>
      <h2>{this.state.val}</h2>
      <CustomButton name = "+" onClick={this.inc} />
      <CustomButton name = "-" onClick={this.dec} />
      <CustomButton name="RESET" onClick={this.reset}/>
    </>
    );
  }
}
 
export default App;