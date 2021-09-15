import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {inc,dec} from "./action/index";
function App() {
  let value = 0;
  const myState = useSelector((state)=>state.incDec);
  const dispatch = useDispatch();
  return (
    <>
      <div className="App">
        <h1>REDUX-COUNTER-APP</h1>
        <h1>{myState}</h1>
        <div>
          <button onClick={()=> dispatch(inc())}>+</button>
          <button onClick={()=> dispatch(dec())}>-</button>
        </div>
      </div>

    </>
  );
}

export default App;
