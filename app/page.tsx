"use client";
import { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);      
  const [isRunning, setIsRunning] = useState(false); 
  useEffect(() => {
    let interval = null;
    
    
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);  
      }, 1000);
    } else if (!isRunning) {
      clearInterval(interval); 
    }

    
    return () => clearInterval(interval);
  }, [isRunning]);  

  return (
    <div className="bg-white p-24 shadow-lg rounded-lg">
      <div className="bg-white p-8 shadow-lg rounded-lg">
      <h1 className="bg-slate-200 p-4 mb-20">{time} seconds passed by</h1>  
      
      <button className="bg-slate-400 p-4 ml-60 mr-60" onClick={() => setIsRunning(true)}>Start</button> 
      <button className="bg-red-600 p-4 ml-60 mr-60" onClick={() => setIsRunning(false)}>Stop</button>  
      <br/>
      <button className="bg-yellow-600 p-4 ml-60 mt-9 " onClick={() => setTime(0)}>Clear</button>  
    </div></div>
  );
}
