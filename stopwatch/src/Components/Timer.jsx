import React from 'react'

const Timer = (props) => {
    return (
        
        <div className="timer">
            <div className="time">
                {/* {console.log(props)} */}
                <div>{props.hr}</div>.
                <div>{props.min}</div>.
                <div>{props.sec}</div>.
                <div>{props.msec}</div>
            </div>
        </div>

    );
}


export default Timer;
