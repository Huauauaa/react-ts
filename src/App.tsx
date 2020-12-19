import React from 'react';
import './App.css';
import TsxDemo from './components/TsxDemo';
import JsxDemo from './components/JsxDemo';
import JsDemo from './components/JsDemo';

function App() {
  return (
    <div className="App">
      <TsxDemo />
      <JsxDemo />
      <JsDemo />
    </div>
  );
}

export default App;
