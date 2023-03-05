import React, { Component } from 'react';
import './styles/Sect.css';
import Hello from './Hello';

import { AiFillHdd } from "react-icons/ai";

class Sect extends Component {
  render() {
    return (
      <div className="Sect">
        <div className="BG">
          <div className="Title">
            <Hello />
          </div>
        </div>
      </div>
    );
  }
}

export default Sect;