import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Line } from 'react-chartjs-2';

function App() {

    const data = {
      labels: ["11:00", "12:00"],
      datasets: [{
        label: "BTC",
        data: [4000, 5000]
      }]
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
