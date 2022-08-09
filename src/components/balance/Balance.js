import React from 'react'
import { useState, useEffect } from "react";

const Balance = () => {
    const [balance, setBalance] = useState(0.00)
    const [calculation, setCalculation] = useState(0.00);

    useEffect(() => {
        setCalculation(() => balance * 2);
      }, [balance]); // <- add the count variable here
    
  return (
    <>
    Your Balance
    <p>{balance}</p>
      <button onClick={() => setBalance((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  )
}

export default Balance
