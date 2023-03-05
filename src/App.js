import React, { Component } from 'react';
import './App.css';
import Head from './components/Head';
import Sect from './components/Sect';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Head></Head>
          <Sect></Sect>
      </div>
    );
  }
}

export default App;