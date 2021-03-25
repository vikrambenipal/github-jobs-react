import React from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import List from './components/List';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <List />
    </div>
  );
}

export default App;
