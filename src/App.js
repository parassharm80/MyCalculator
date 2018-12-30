import React, { Component } from 'react';
import Panel from "./Panel";
import Screen from "./Screen";
import "./App.css";
import "./Answer";
import Answer from './Answer';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ans: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    this.setState(Answer(this.state, buttonName));
  };

  render() {
    return (
      <div className="app">
        <Screen value={this.state.next||this.state.ans||"0"}/>
        <Panel clickHandler={this.handleClick} />
     </div>
    );
  }
}

export default App;
