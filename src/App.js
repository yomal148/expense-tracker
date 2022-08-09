import React from 'react'
import './App.css';
import Header from './components/header/Header'
import Balance from './components/balance/Balance'

function App() {
  return (
    <div>
      <Header/>
      <div className='balance'>
      <Balance/>
      </div>
    </div>
  );
}


export default App;
