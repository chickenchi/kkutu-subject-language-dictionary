import React, { Component } from 'react';
import './styles/Hello.scss';

class Hello extends Component {
  render() {
    return (
      <div className="Hello">
          <h2>
            <span className="kc">끄투코리아</span>
            <span className="none">/</span>
            <span className="kr">끄투리오</span>
          </h2>
          <br />
          <h2 className="none">종합 언어 단대 검색기</h2>
          <p>안녕하세요! <span>끄투 언어 사전</span>에 오신 것을 환영합니다.<br />
          사전 이용 시 부족하거나 빠진 단어가 있을 수 있습니다.<br />
          작업 문의: herosofthestom12@gmail.com</p>
      </div>
    );
  }
}

export default Hello;