import React, { Component } from "react";

class Counter extends Component {
  state = {
    cnt: 0
  };

  increase = () => {
    this.setState({
      cnt: this.state.cnt + 1
    });
  };

  decrease = () => {
    this.setState({
      cnt: this.state.cnt - 1
    });
  };

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <h3>CNT : {this.state.cnt}</h3>
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
      </div>
    );
  }
}

export default Counter;
