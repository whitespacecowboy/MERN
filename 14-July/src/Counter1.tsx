import React, { Component } from 'react';

// interface 
class Counter1 extends Component {
  state = {
    count: 0,
    msg: "Welcome to the world of react"
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };
  zero = () => {
    this.setState({ count: this.state.count = 0 });
  };
  render() {
    return (
      <div>
        <h1>Counter: {this.state.msg}</h1>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}>Increase</button> <br/>
        <button onClick={this.decrease}>Decrease</button> <br />
        <button onClick={this.zero}>Zero</button>
      </div>
    );
  }
}

export default Counter1;