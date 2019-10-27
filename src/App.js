import React from 'react';
import TopMenu from './components/TopMenu'
import Routes from './routes'
import { BrowserRouter } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
