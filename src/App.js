import Inputs from './components/Inputs';
import Score from './components/Score';
import './App.css';
import React, { useState, useEffect } from 'react';
import Clock from './components/Clock';

function App() {
  const [exchangeRates, setExchangeRates] = useState({});
  const [score, setScore] = useState(0);
  const [exchangeTo, setExchangeTo] = useState("");


  const objectFormatter = (exchangeObject) => {
    const updatedObject = {};

    for (const key in exchangeObject) {
      const newKey = key.slice(3);
      updatedObject[newKey] = exchangeObject[key];
    }

    return updatedObject
  }

  useEffect(() => {
    fetch('https://monkeys.co.il/api2/currency.php')
      .then((response) => response.json())
      .then((data) => {
        setExchangeRates(objectFormatter(data.quotes));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleCalculate = (amount, from, to) => {
    if (amount >= 0) {
      const ratio = exchangeRates[to] / exchangeRates[from];
      const recieved = amount * ratio;

      setScore(recieved);
      setExchangeTo(to);
    } else {
      alert("Add Positive Amount!")
    }
  }

  return (
    <div className='App'>
      <h1>Exchange Currency</h1>
      <Clock />
      <Inputs exchangeRates={exchangeRates} handleCalculate={handleCalculate} />
      <Score score={score} exchangeTo={exchangeTo} />
    </div>
  );
}

export default App;
