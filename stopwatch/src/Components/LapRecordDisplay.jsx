import React from 'react';

const LapRecordDisplay = (props) => {
    let lap = props.lap;
    return (

        <div className="laps">
            <h1>LAP RECORD</h1>
            {lap != null ? <>
                {lap.map(function (lapObj) {
                    return (
                        <div key={lapObj.key}>
                            <div className="laprecord">{(lapObj.key) + ")  " + (lapObj.hr) + "." + (lapObj.min) + "." + (lapObj.sec) + "." + (lapObj.msec)}</div>
                        </div>
                    );
                })}
            </> : ""}

            {/* {props.currLap.msec != null ? <div className="laprecord">{(props.currLap.hr) + "." + (props.currLap.min) + "." + (props.currLap.sec) + "." + (props.currLap.msec)}</div> : ""} */}
        </div>
    );
}


export default LapRecordDisplay;