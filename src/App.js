import React from 'react';
import Head from './components/navbar';
import Body from './components/header';
import Info from './components/info'
import Team from './components/team';
import './App.css';


function App() {
  return (
    <div className="App">
      <Head />
      <Body />
      <Info/>
      <Team />
    </div>
  );
}

export default App;
