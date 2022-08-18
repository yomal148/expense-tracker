import React from 'react';
import { useState } from "react";
import './transaction.css'

const Transaction = () => {
  const [amount, setAmount] = useState('');
  const [text, setText] = useState('');
  
  // updater function to only allow numbers in amount input box
  const handleChange = event => {
    
    const result = event.target.value.replace(/\D/g, '');

    setAmount(result)
  };
  

  // updater function to only allow text in text input box
  const handleChange2 = event => {
    
    const result = event.target.value.replace(/[^a-z]/gi, '');

    setText(result)
  };
  
  return (
    <>
      <form>
        <b> Add New Transaction </b> <br /> 
        <hr />

         <small> Text </small> <br /> 
        <input
          type="text" 
          placeholder="Enter Text"
          value={text}
          onInput={handleChange2}
        />
        
        <br /> 
         <small>  Amount <br /> (negative - expense, positive - income)
         </small>
        <input
          type="text" 
          placeholder="Enter Amount"
          value={amount}
          onInput={handleChange}
        /> 
  
        <br /> 
        <div className='purplebutton1'>Add Transaction</div>
      </form>

    </>
  )
}

export default Transaction
