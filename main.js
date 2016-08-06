import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom';
import reduxLite from './redux-lite.js';
import DropDown from './drop-down.js';
import './demo.css';

const reducers = {
  decrement: state => ({number: state.number - 1}),
  increment: state => ({number: state.number + 1}),
  selectColor: (_, color) => ({selectedColor: color}),
  reset: () => ({number: 0})
};

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      colors: ['Red', 'Green', 'Blue'],
      selectedColor: 'Red'
    };
  }
  decrement() {
    dispatch(reducers.decrement);
  }
  increment() {
    dispatch(reducers.increment);
  }
  selectColor(event) {
    const color = event.target.value;
    dispatch(reducers.selectColor, color);
  }
  reset() {
    dispatch(reducers.reset);
  }
  render() {
    const {colors, number, selectedColor} = this.state;
    return <div>
      <div>
        <button onClick={this.decrement}>-</button>
        {number}
        <button onClick={this.increment}>+</button>
      </div>
      <div>
        <button onClick={this.reset}>Reset</button>
      </div>
      <div>
        <DropDown values={colors}
          selectedValue={selectedColor}
          onChange={this.selectColor}/>
        You selected {selectedColor}.
      </div>
    </div>;
  }
}

const topComponent = ReactDOM.render(
  <Counter/>,
  document.getElementById('content'));

const dispatch = reduxLite(topComponent);
