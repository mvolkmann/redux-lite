import React from 'react'; //eslint-disable-line

class Counter extends React.Component {
  constructor() {
    super();

    // Pre-bind event handling methods that use "this".
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.reset = this.reset.bind(this);
  }

  render() {
    return <div>
      <button onClick={this.decrement}>-</button>
      {this.props.count}
      <button onClick={this.increment}>+</button>
      <button onClick={this.reset}>Reset</button>
    </div>;
  }

  decrement() {
    const {count, onChange} = this.props;
    onChange(count - 1);
  }

  increment() {
    const {count, onChange} = this.props;
    onChange(count + 1);
  }

  reset() {
    this.props.onChange(0);
  }
}

const {func, number} = React.PropTypes;
Counter.propTypes = {
  onChange: func.isRequired, // passed the new count
  count: number.isRequired
};

export default Counter;
