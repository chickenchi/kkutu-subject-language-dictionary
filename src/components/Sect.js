import React, { Component } from 'react';
import './styles/Sect.scss';
import Hello from './Hello';
import All from './All';
import Sentence from './Sentence';
import Mission from './Mission';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class Sect extends Component {
  render() {
    return (
      <div className="Sect">
        <div className="BG">
          <div className="Title">
            <Routes>
              <Route path="/" element={<Hello />} />
              <Route path="/All" element={<All />} />
              <Route path="/Sentence" element={<Sentence />} />
              <Route path="/Mission" element={<Mission />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}

export default Sect;