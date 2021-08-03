import './App.css';
import React from 'react'

import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <h1>Did you feed the dog?</h1>
      </header>
        <Home/>
    </div>
  );
}

export default App;
