import React, { Component } from 'react';
import './styles/Head.scss';

import { AiFillHdd } from "react-icons/ai";

import { Link } from 'react-router-dom';

class Head extends Component {
  render() {
    return (
      <div className="Head">
        <div className="BG">
          <div className="Title">
              <Link to=""><h1>언어 사전 l</h1></Link>
              <AiFillHdd size="30" />
          </div>
          <div className="Sentence">
              <div className="Selection">
                <p className="Bar">─</p>
                <div className="S1">
                  <Link to="All"><p>종합 검색</p></Link>
                </div>
              </div>
              
              <div className="Selection">
                <p className="Bar">─</p>
                <div className="S2">
                <Link to="Mission"><p>미션 단어</p></Link>
                </div>
              </div>

              <div className="Selection">
                <p className="Bar">─</p>
                <div className="S3">
                <Link to="Sentence"><p>장문 모음</p></Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Head;