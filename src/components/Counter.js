import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div style={this.props.style}>
        <h1 className="counter">{this.props.currentCounter}</h1>
        <button onClick={this.props.incrementCounter}>Plus</button>
      </div>
    );
  }
}

export default Counter;
