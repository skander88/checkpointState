import React, { Component } from "react";
import "../App.css";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const fullName = "Peter Parker";
    const bio = "Spider Man";
    const imgSrc =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIa7Y1wvF2YApNlycmETPhV-E9D_i-KWmBlf3QkPpKI3Sf-GEAUkLn3owIjH_JMvFzoc&usqp=CAU";
    const profession = "Saving the innocent people and fights the bad guys";

    return (
      <div>
        <div className="corps">
          <div>
            <h1>Full Name: {fullName}</h1>
          </div>
          <div>
            <img className="imagesp" src={imgSrc} alt="Avatar" />
          </div>
          <div>
            <h2>Bio: {bio}</h2>
            <h2>Profession: {profession}</h2>
          </div>
          <div>
            <h2>Counter: {this.state.counter}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Person;
