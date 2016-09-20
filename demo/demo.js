/*global dispatch */ // defined in redux-lite.js
import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom';
import reduxLite from '../redux-lite.js';
import Counter from './counter.js';
import DropDown from './drop-down.js';
import './demo.css';

// These reducers don't need to examine the current state
// in order to determine the new state.
// That is why their first parameter is "_" instead of "state".
const reducers = {
  countChange: (_, count) => ({count}),
  selectColor: (_, color) => ({selectedColor: color})
};

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: ['Red', 'Green', 'Blue'],
      count: 0,
      selectedColor: 'Red'
    };
  }

  render() {
    const {colors, count, selectedColor, selectedName} = this.state;
    return <div>
      <Counter count={count} onChange={this.countChange}/>
      <DropDown values={colors}
        selectedValue={selectedColor}
        onChange={this.selectColor}/>
      You selected {selectedColor}.

      <select value={selectedName} onChange={e => this.selectName(e)}>
        <option value="Mark">Mark</option>
        <option value="Tami">Tami</option>
      </select>
    </div>;
  }

  selectName(event) {
    this.setState({selectedName: event.target.value});
  }

  countChange(newCount) {
    dispatch(reducers.countChange, newCount);
  }

  selectColor(event) {
    const color = event.target.value;
    dispatch(reducers.selectColor, color);
  }
}

reduxLite(ReactDOM.render(
  <Main/>,
  document.getElementById('content')));
