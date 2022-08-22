import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            color: "red",
            height: 50,
            background: "green",
            fontSize: 30
          }}
        >
          <h1 className="counter">{this.props.currentCounter}</h1>
        </div>
      </>
    );
  }
}

export default Navbar;
