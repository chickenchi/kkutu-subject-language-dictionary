import React, { Component } from 'react';
import './styles/Head.css';

import { AiFillHdd } from "react-icons/ai";

class Head extends Component {
  render() {
    return (
      <div className="Head">
        <div className="BG">
          <div className="Title">
              <h1>언어 사전 l</h1>
              <AiFillHdd size="30" />
          </div>

          <div className="Sentence">
              <div className="Selection">
                <p className="Bar">─</p>
                <div className="S1">
                  <p>종합 검색</p>
                </div>
              </div>
              
              <div className="Selection">
                <p className="Bar">─</p>
                <div className="S2">
                  <p>미션 단어</p>
                </div>
              </div>

              <div className="Selection">
                <p className="Bar">─</p>
                <div className="S3">
                  <p>장문 모음</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Head;