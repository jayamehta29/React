import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const SSBtn = (props) => {
    return (
        <div className="play-pause">
            <FontAwesomeIcon icon={props.icon} size="5x" className="play" onClick={props.handle} />
        </div>


    );
}

export default SSBtn;