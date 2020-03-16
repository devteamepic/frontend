import React from 'react';
import './App.css';
import Input from './components/core/atoms/Input/Input'

function App() {

  return (
    <div className="App">
      <Input
        type = { 'text' }
        placeholder = 'email'
      />
      <Input
        type = { 'button' }
        text = 'asdf'
      />
    </div>
  );
}



export default App;
