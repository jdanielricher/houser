import React, { Component } from 'react';
import './App.css';
// import Dashboard from './component/Dashboard/Dashboard';
// import Wizard from './component/Wizard/Wizard';
import Header from './component/Header/Header';
import { HashRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {HashRouter}
      </div>
    );
  }
}

export default App;
