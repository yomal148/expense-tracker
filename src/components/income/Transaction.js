import React from 'react';
import { useState } from "react";

const Transaction = () => {
  const [income, setIncome] = useState(0);

  const handleChange = event => {
    
    const result = event.target.value.replace(/\D/g, '');

    setIncome(result)
  };
  
  return (
    <div className='transaction'>
      <form>
         Amount <br /> (negative - expense, positive - income)
        <input
          type="text" pattern="[0-9]*"
          placeholder="Enter Amount"
          value={income}
          onInput={handleChange}
        />
      </form>

    </div>
  )
}

export default Transaction
