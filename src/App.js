import React, { Component } from 'react';
import './App.scss';
import Head from './components/Head';
import Sect from './components/Sect';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Sect />
      </div>
    );
  }
}

export default App;