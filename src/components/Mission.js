import React, { Component } from 'react';
import './styles/Mission.scss';

class Mission extends Component {
  render() {
    return (
      <div className="Mission">
        <div className="Mission_Button">
          <button className="Hangul1">가</button>
          <button className="Hangul2">나</button>
          <button className="Hangul3">다</button>
          <button className="Hangul4">라</button>
          <button className="Hangul5">마</button>
          <button className="Hangul6">바</button>
          <button className="Hangul7">사</button>
          <button className="Hangul8">아</button>
          <button className="Hangul9">차</button>
          <button className="Hangul10">카</button>
          <button className="Hangul11">타</button>
          <button className="Hangul12">파</button>
          <button className="Hangul13">하</button>
        </div>
        
        <div className="Res_Text">
          <p>ServerNotFoundError :: DB 구축 필요</p>
        </div>
      </div>
    );
  }
}

export default Mission;