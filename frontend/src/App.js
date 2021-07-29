import './App.css';
import React from 'react'

import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Home/>
      </header>
    </div>
  );
}

export default App;
