import React from 'react';
import './App.css';

function rand () {
  return Math.round(Math.random() * 9)
}

export default class App extends React.Component {
  state = {
    num1: rand(),
    num2: rand(),
    response: ""
  }

  onChange = (e) => {
    this.setState({ response: e.target.value })
  }

  onKeyDown = (e) => {
    if (e.key === "Enter") {
      if (parseInt(e.target.value) === this.state.num1 + this.state.num2) {
        this.setState({
          num1: rand(),
          num2: rand(),
          response: ""
        })
      }
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <div>{this.state.num1} + {this.state.num2} = <input value={this.state.response} onChange={this.onChange} onKeyDown={this.onKeyDown} type="number"></input></div>
        </header>
      </div>
    );
  }
}
