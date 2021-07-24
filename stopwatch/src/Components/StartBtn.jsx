import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
// import './StartBtn.css';

class StartBtn extends Component {
    // constructor(props) {
    //     super(props);
    // }

    

    render() {
        return (
            
            <div className="play-pause">
                <FontAwesomeIcon icon={faPlayCircle} size="5x" className="play" onClick={this.props.handleStart}/>
            </div>

        );
    }
}

export default StartBtn;