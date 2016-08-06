import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom';
import reduxLite from './redux-lite.js';
import './demo.css';

const reducers = {
  decrement: state => ({number: state.number - 1}),
  increment: state => ({number: state.number + 1}),
  reset: () => ({number: 0})
};

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {number: 0};
  }
  decrement() {
    dispatch(reducers.decrement);
  }
  increment() {
    dispatch(reducers.increment);
  }
  reset() {
    dispatch(reducers.reset);
  }
  render() {
    return <div>
      <div>
        <button onClick={this.decrement}>-</button>
        {this.state.number}
        <button onClick={this.increment}>+</button>
      </div>
      <button onClick={this.reset}>Reset</button>
    </div>;
  }
}

const topComponent = ReactDOM.render(
  <Counter/>,
  document.getElementById('content'));

const dispatch = reduxLite(topComponent);
