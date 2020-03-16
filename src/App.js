import React from 'react';
import './App.css';
import Input from './components/core/atoms/Input/Input'
import DragAndDrop from './components/core/atoms/DragAndDrop/DragAndDrop'

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
      <Input
        type = { 'file' }
      />
      <DragAndDrop />
    </div>
  );
}



export default App;
