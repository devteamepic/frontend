import React from 'react';
import ReactMarkdown from 'react-markdown'
import './App.css';

function App() {

  const input = '## adsfasdfasdfasdfasfasf'
  return (
    <div className="App">
      <div id="wrapper">
        <div id="left-menu">
          <ReactMarkdown  source={input} />
        </div>
        <div id="content">
          asfasfd
        </div>
      </div>
    </div>
  );
}



export default App;
