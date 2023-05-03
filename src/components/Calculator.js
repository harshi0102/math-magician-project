import './calculator.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    next: null,
    operation: null,
    total: null,
  });

  const clickHandler = (e) => {
    setState(calculate(state, e.target.textContent));
  };

  const { next, operation, total } = state;
  return (
    <div className="container">
      <div className="display">{ next || operation || total || 0 }</div>
      <div className="buttons">
        <div className="row">
          <button type="button" onClick={clickHandler} className="gray calc-btn-normal">AC</button>
          <button type="button" onClick={clickHandler} className="gray calc-btn-normal">+/-</button>
          <button type="button" onClick={clickHandler} className="gray calc-btn-normal">%</button>
          <button type="button" onClick={clickHandler} className="calc-btn-normal orangebutton firstsh">÷</button>
        </div>
        <div className="row">
          <button type="button" onClick={clickHandler} className="gray calc-btn-normal">7</button>
          <button type="button" onClick={clickHandler} className="gray calc-btn-normal">8</button>
          <button type="button" onClick={clickHandler} className="gray calc-btn-normal">9</button>
          <button type="button" onClick={clickHandler} className="calc-btn-normal orangebutton">x</button>
        </div>
        <div className="row">
          <button type="button" onClick={clickHandler} className="gray calc-btn-normal">4</button>
          <button type="button" onClick={clickHandler} className="gray calc-btn-normal">5</button>
          <button type="button" onClick={clickHandler} className="gray calc-btn-normal">6</button>
          <button type="button" onClick={clickHandler} className="calc-btn-normal orangebutton">-</button>
        </div>
        <div className="row">
          <button type="button" onClick={clickHandler} className="gray calc-btn-normal">1</button>
          <button type="button" onClick={clickHandler} className="gray calc-btn-normal">2</button>
          <button type="button" onClick={clickHandler} className="gray calc-btn-normal">3</button>
          <button type="button" onClick={clickHandler} className="calc-btn-normal orangebutton">+</button>
        </div>
        <div className="row">
          <button type="button" onClick={clickHandler} className="gray calc-btn-normal double">0</button>
          <button type="button" onClick={clickHandler} className="gray calc-btn-normal lastsh">.</button>
          <button type="button" onClick={clickHandler} className="calc-btn-normal orange lastsh">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
