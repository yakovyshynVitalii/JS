import React from 'react';
import logo from './logo.svg';
import './App.css';

import Input from './input/input'
import List from './list/List';

function App() {
  return (
    <div className="App">
    <div><Input/></div>
      <div className="ToDoList">
     
      <div><List/></div>
      </div>
     
    </div>

    
  );
}

export default App;
