import React, { Component } from "react";
import Person from "./components/Person.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  handleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <div>
          <center>
            {" "}
            <button className="btn" onClick={this.handleClick}>
              click to count
            </button>
          </center>
        </div>
        <div>{this.state.show && <Person />}</div>
      </div>
    );
  }
}
export default App;
