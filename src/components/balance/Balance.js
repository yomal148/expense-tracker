import React from 'react'
import { useState, useEffect } from "react";

const Balance = () => {
    const [balance, setBalance] = useState(0)
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => balance * 2);
      }, [balance]); 
    
  return (
    <>
      Your Balance
       <h1> ${balance} </h1>
      
    </>
    
   
  )
}

export default Balance
