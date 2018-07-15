import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class StopWatch extends React.Component {
  state = { lapse: 0, running: false };

  handleRunClick = () => {
    const startTime = Date.now() - this.state.lapse;
    this.setState(state => {
      if (state.running) {
        clearInterval(this.timer);
      } else {
        this.timer = setInterval(() => {
          this.setState({ lapse: Date.now() - startTime });
        });
      }
      return { running: !state.running };
    });
  };

  handleClear = () => {
    clearInterval(this.timer);
    this.setState({ lapse: 0, running: false });
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { lapse, running } = this.state;

    const buttonStyles = {
      background: "#fff",
      fontSize: "2em",
      margin: 5,
      width: 200,
      border: "1px solid"
    };

    return (
      <div className="App">
        <label style={{ fontSize: "5em", display: "block" }}>{lapse}ms</label>
        <button onClick={this.handleRunClick} style={buttonStyles}>
          {running ? "Stop" : "Start"}
        </button>
        <button onClick={this.handleClear} style={buttonStyles}>
          Clear
        </button>
      </div>
    );
  }
}

const element = <StopWatch />;

const rootElement = document.getElementById("root");
ReactDOM.render(element, rootElement);
