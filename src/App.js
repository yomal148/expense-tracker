import React from 'react'
import './App.css';
import Header from './components/header/Header'
import Balance from './components/balance/Balance'
import Transaction from './components/income/Transaction';

function App() {
  
  return (  
    <div>
      <Header/>
      <div className='container'> 
        <Balance/>
        <Transaction/>
      </div>
    </div>
  );
  
  
}

// Background color
document.body.style = 'background: gray;';
export default App;
