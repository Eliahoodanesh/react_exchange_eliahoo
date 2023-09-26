import React, { useState } from 'react'
import "./Inputs.css"

const Inputs = ({ exchangeRates, handleCalculate }) => {
    const [amount,setAmount] = useState(0);
    const [fromInput,setFromInput] = useState("USD");
    const [toInput,setToInput] = useState("USD");

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    }

    const handleFromInputChange = (e) => {
        setFromInput(e.target.value);
    }
    
    const handleToInputChange = (e) => {
        setToInput(e.target.value);
    }

    return (
        <div className='inputs-container'>
            <div className='inputs-wrapper'>
                <div className='inputs-input amount-wrapper'>
                    <label htmlFor="amount">Amount</label>
                    <input name='amount' value={amount} type="number" placeholder='Enter amount...' onChange={handleAmountChange}/>
                </div>
                <div className='inputs-input from-wrapper'>
                    <label htmlFor="from">From</label>
                    <select value={fromInput} name="from" className='from' onChange={handleFromInputChange}>
                        {exchangeRates && Object.keys(exchangeRates).map((key, i) => (
                            <option value={key} key={i}>
                                {key}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='switch-icon'></div>
                <div className='inputs-input to-wrapper'>
                    <label htmlFor="to">To</label>
                    <select value={toInput}  name="to" className='to' onChange={handleToInputChange}>
                        { exchangeRates && Object.keys(exchangeRates).map((key, i) => (
                            <option value={key} key={i}>
                               {key}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <button className='inputs-convert' onClick={() => handleCalculate(amount, fromInput, toInput)}>Convert</button>
        </div>
    )
}

export default Inputs