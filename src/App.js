import React from 'react';
import ReactMarkdown from 'react-markdown'
import table from './markdownBasics/leftMenuTable'
import main from './markdownBasics/main'
import './App.css';

function App() {

  return (
    <div className="App">
      <div id="wrapper">
        <div id="left-menu">
          <ReactMarkdown source={table} />
        </div>
        <div id="content">
          <ReactMarkdown source={main} escapeHtml={false}/>
        </div>
      </div>
    </div>
  );
}



export default App;
