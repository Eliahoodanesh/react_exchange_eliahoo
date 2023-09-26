import React from 'react'
import "./Score.css"

const Score = ({score, exchangeTo}) => {

  return (
    <div className='score-container'>
        <h2>You Get:</h2>
        <div className='score-value'>{score.toFixed(5)}</div>
        <div className='score-to'>{exchangeTo}</div>
    </div>
  )
}

export default Score