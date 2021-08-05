import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  render() {
    return (
      <div style={{ width: "550px", margin: "auto" }}>
        <h1>
          I can pull changement from my local to apear on may EC2 ubunto
          instance
        </h1>
      </div>
    );
  }
}

export default App;
