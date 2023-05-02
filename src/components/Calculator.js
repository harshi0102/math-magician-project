import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="calcscreen">0</div>
        <div className="calcbuttons">
          <div className="row">
            <div className="gray calc-btn-normal">AC</div>
            <div className="gray calc-btn-normal">+/-</div>
            <div className="gray calc-btn-normal">%</div>
            <div className="calc-btn-normal orangebutton firstsh">÷</div>
          </div>
          <div className="row">
            <div className="gray calc-btn-normal">7</div>
            <div className="gray calc-btn-normal">8</div>
            <div className="gray calc-btn-normal">9</div>
            <div className="calc-btn-normal orangebutton">x</div>
          </div>
          <div className="row">
            <div className="gray calc-btn-normal">4</div>
            <div className="gray calc-btn-normal">5</div>
            <div className="gray calc-btn-normal">6</div>
            <div className="calc-btn-normal orangebutton">-</div>
          </div>
          <div className="row">
            <div className="gray calc-btn-normal">1</div>
            <div className="gray calc-btn-normal">2</div>
            <div className="gray calc-btn-normal">3</div>
            <div className="calc-btn-normal orangebutton">+</div>
          </div>
          <div className="row">
            <div className="gray calc-btn-normal double">0</div>
            <div className="gray calc-btn-normal lastsh">.</div>
            <div className="calc-btn-normal orangebutton lastsh">=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
