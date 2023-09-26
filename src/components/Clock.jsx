import React, { useEffect, useState } from 'react'
import "./Clock.css"

const Clock = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentDateTime(new Date());
      }, 1000); // Update every second
  
      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []);
  
    const formattedDateTime = currentDateTime.toLocaleString();
  
    return (
      <div className='clock-container'>
        <p className='clock-content'>{formattedDateTime}</p>
      </div>
    );
}

export default Clock