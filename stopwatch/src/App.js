import React, { useState, useEffect } from 'react'


//************************************************************************************ */
//REACT HOOKS POC
// function App(props){
// const [count,setCount] = useState(0);
// const [tCount,setTCount] = useState(10);


// useEffect(()=>{
//   console.log("didmount ");
//   return ()=>{
//     console.log("willUnMount");
//   }
// },[])


// useEffect(()=>{
//   console.log("didmount an didupdate ");
// })

// useEffect(()=>{
//   console.log("count did update");
// },[count,tCount])


// return(
// <div>
//   HELLO APP
//   <p>{count}</p>
//   <button onClick={()=>{
//     setCount(count+1);
//   }}>INC</button>
//   {/* <button></button> */}
//   <p>{tCount}</p>
//   <button onClick={()=>{
//     setTCount(tCount+1);
//   }}>INC</button>
// </div>

// );

// }

//************************************************************************************ */

import Timer from './Components/Timer.jsx'
import AllBtn from './Components/AllBtn.jsx'
import LapRecordDisplay from './Components/LapRecordDisplay.jsx'
import SSBtn from './Components/SSBtn.jsx'
import { useRef } from 'react'

import { faPause, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App(props) {
  const myinterval = useRef(null);

  const [hr, setHr] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [msec, setMsec] = useState(0);
  const [key, setId] = useState(1);
  const [lap, setLap] = useState([]);
  const [flag, setFlag] = useState(false);

  function handleReset() {
    console.log("reset");
    setHr(0);
    setMin(0);
    setSec(0);
    setMsec(0);
    setFlag(false);
    setId(0);
    setLap([]);
    clearInterval(myinterval.current);
  }


  function handlePause() {
    console.log("pause");
    // console.log(flag);
    // let fflag;
    // setFlag(flag=>{ 
    //   fflag=flag;
    //   return false});
    setFlag(false);
    clearInterval(myinterval.current);
    console.log(flag);
  }

  function handleStart() {
    console.log("start");
    setFlag(true);

    myinterval.current = setInterval(() => {
      let val;

      setMsec(msec => {
        val = msec;
        return msec + 1
      });

      if (val === 100) {
        setSec(sec => sec + 1);
        setMsec(0);
      }
      if (sec === 60) {
        setMin(min => min + 1);
        setSec(0);
      }

      if (min === 60) {
        setHr(hr => hr + 1);
        setMin(0);
      }
    }, 10);
  }


  function handleLap() {
    let newlap = [{ key: key, hr: hr, min: min, sec: sec, msec: msec },...lap];
    setId(key => key + 1);
    setLap(newlap);
    console.log(lap);
  }

  return (
    <>
      <div className="main">
        <Timer hr={hr} min={min} sec={sec} msec={msec} />

        {flag ?
          <SSBtn handle={handlePause} icon={faPause} /> :
          <SSBtn handle={handleStart} icon={faPlayCircle} />
        }

        <AllBtn handle={handleReset} name="RESET" classNameO="outer" classNameI="inner" />
        <AllBtn handle={handleLap} name="LAP" classNameO="lap-outer" classNameI="lap-inner" />

        <LapRecordDisplay lap={lap} />
      </div>
    </>
  );
}

export default App;
