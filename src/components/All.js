import React, { Component } from 'react';
import './styles/All.scss';

import { ImSearch } from 'react-icons/im';

class All extends Component {
  render() {
    return (
      <div className="All">
          <form method="GET" action="">
            <div className="search">
              <input type="text" name="query"></input>
              <button type="submit"><ImSearch color="white" /></button>
            </div>
          </form>
          <br />
          <div className="result">
            <h1 className="Res_Title">결과</h1>
            <hr className="Res_Line" />
            <br /><br />
            <div className="Res_Text">ServerNotFoundError :: DB 구축 필요</div>
          </div>
      </div>
    );
  }
}

export default All;