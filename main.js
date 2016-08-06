import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom';
import reduxLite from './redux-lite.js';
import './demo.css';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {number: 0};
  }

  render() {
    return <div>
      <div>
        <button onClick={decrement}>-</button>
        {this.state.number}
        <button onClick={increment}>+</button>
      </div>
      <button onClick={reset}>Reset</button>
    </div>;
  }
}

const reducers = {
  decrement: state => ({number: state.number - 1}),
  increment: state => ({number: state.number + 1}),
  reset: () => ({number: 0})
};

const topComponent = ReactDOM.render(
  <Counter/>,
  document.getElementById('content'));

const dispatch = reduxLite(topComponent);

function decrement() {
  dispatch(reducers.decrement);
}
function increment() {
  dispatch(reducers.increment);
}
function reset() {
  dispatch(reducers.reset);
}
