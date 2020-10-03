import React, { Component } from "react";
import Main from './Components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import "./index.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
