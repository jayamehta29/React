import React, { Component } from 'react';
class CustomButton extends Component {
    constructor(props) {
      super(props); 
  }
  render() {
    return <button onClick={this.props.onClick}>{this.props.name}</button> 
  }
}  
  export default CustomButton;