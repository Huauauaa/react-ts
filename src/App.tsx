import React from 'react';
import './App.css';
import TsxDemo from './components/TsxDemo';
import JsxDemo from './components/JsxDemo';
import JsDemo from './components/JsDemo';
import TsFeat from './components/TsFeat';
import MdnDemo from './components/MdnDemo';
import Highlight from './components/Highlight';
import Markdown from './components/Markdown';

function App() {
  return (
    <div className="App">
      <TsxDemo />
      <JsxDemo />
      <JsDemo />
      <TsFeat />
      <MdnDemo />
      <Highlight />
      <Markdown />
    </div>
  );
}

export default App;
