import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import Input from './components/core/atoms/Input/Input'
import FileContainer from './redux/containers/fileContainer'

function App(props) {

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
      <FileContainer/>
      <div>
    { props.files.name }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { files: state.files }
}



export default connect(mapStateToProps) (App);
