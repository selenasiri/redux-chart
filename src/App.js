import React from 'react';
import './App.css';
import { Line } from 'react-chartjs-2';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from "./actions/bitcoinActions"

function App() {
  const dispatch  = useDispatch;
  const state = useSelector(state => state.bitcoin);
  const [num, setNum] = React.useState(15); 
  const data = {
     labels: ["11:00", "12:00"],
     datasets: [{
      label: "BTC",
      data: [4000, 5000],
      backgroundColor: 'rgba(238, 175, 0, 0.4)',
      borderColor: 'rgba(238, 175, 0, 0.5)',
      pointBorderColor: 'rgba(238, 175, 0, 0.7)'
     }]
  }

const fetchData = (time) => {
  // Fetch data from redux using time
  dispatch(getData({
   time: time,
   number: num
  }));
}

  return (
    <div className="App">
      <div className={"btns-wrapper"}>
        <button onClick={() => fetchData("1min")}>1 Min</button>
        <button onClick={() => fetchData("5min")}>5 Min</button>
        <button onClick={() => fetchData("15min")}>15 Min</button>

        <input onChange={e => setNum(e.target.value)} />
        {state.loading && <p>Loading...</p>}
      </div>
      <div className={"chart-wrapper"}>
        <Line 
        data={data}
      />
      </div>
    </div>
  );
}

export default App;
