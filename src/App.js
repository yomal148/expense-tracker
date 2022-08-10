import React from 'react'
import './App.css';
import Header from './components/header/Header'
import Balance from './components/balance/Balance'

function App() {
  
  return (  
    <div>
      <Header/>
      <div className='container'> 
        <Balance/>
      </div>
    </div>
  );
  
  
}

// Background color
document.body.style = 'background: gray;';
export default App;
