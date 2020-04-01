import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Feed from './components/Feed'; 
import PHistory from './components/History'; 
import About from './components/About'; 
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <Navigation/>
      
      <Route path="/" exact component={Home}></Route>
      <Route path="/Progress-Feed" component={Feed}></Route>
      <Route path="/Project-History" component={PHistory}></Route>
      <Route path="/About" component={About}></Route>
    </div>
  );
}

export default App;
