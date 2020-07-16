import React from 'react';
import Head from './components/navbar';
import Body from './components/header';
import Team from './components/team';
import './App.css';


function App() {
  return (
    <div className="App">
      <Head />
      <header className='App-header'>
        <Body />
      </header>
      <Team />
    </div>
  );
}

export default App;
