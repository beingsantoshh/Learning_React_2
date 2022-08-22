import "./styles.css";
import Counter from "./components/Counter";
import React from "react";
import Navbar from "./components/Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  render() {
    const incrementCounter = () => {
      this.setState({
        counter: this.state.counter + 1
      });
    };

    return (
      <>
        <Counter
          currentCounter={this.state.counter}
          incrementCounter={incrementCounter}
          style={{ background: "red", color: "white" }}
        ></Counter>

        <Counter
          currentCounter={this.state.counter}
          incrementCounter={incrementCounter}
          style={{ background: "aliceblue", color: "black" }}
        ></Counter>

        <Navbar counter={this.state.counter} />
      </>
    );
  }
}

export default App;
