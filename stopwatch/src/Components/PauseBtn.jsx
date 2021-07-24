import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPause } from '@fortawesome/free-solid-svg-icons'


class PauseBtn extends Component {

    render() {
        return (
            
            <div className="play-pause">
                <FontAwesomeIcon icon={faPause} size="5x" className="play" onClick={this.props.handlePause}/>
            </div>

        );
    }
}

export default PauseBtn;