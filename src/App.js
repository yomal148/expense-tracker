import React from 'react'
import './App.css';
import Header from './components/header/Header'
import Balance from './components/balance/Balance'
import Transaction from './components/transactions/Transaction';
import IncomeExpenses from './incomeexpenses/IncomeExpenses';

function App() {
  
  return (  
    <div>
      <Header/>
      <div className='container'> 
        <Balance/>
        <IncomeExpenses/>
        <br />
        <Transaction/>
      </div>
    </div>
  );
  
  
}

// Background color
document.body.style = 'background: white;';
export default App;
