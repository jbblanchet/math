import React from 'react';
import './App.css';

function rand (max) {
  return Math.floor(Math.random() * (max + 1))
}

function randOp () {
  switch (rand(2)) {
    case 0:
      return "+"
    case 1:
      return "-"
    default:
      return "x"
  }
}

export default class App extends React.Component {
  state = {
    num1: rand(10),
    num2: rand(10),
    op: randOp(),
    response: ""
  }

  onChange = (e) => {
    this.setState({ response: e.target.value })
  }

  onKeyDown = (e) => {
    if (e.key === "Enter") {
      let expectedAnswer
      switch (this.state.op) {
        case "+":
          expectedAnswer = this.state.num1 + this.state.num2
          break;
        case "-":
          expectedAnswer = this.state.num2
          break;
        default:
          expectedAnswer = this.state.num1 * this.state.num2
          break;
      }
      if (parseInt(e.target.value) === expectedAnswer) {
        this.setState({
          num1: rand(10),
          num2: rand(10),
          op: randOp(),
          response: ""
        })
      }
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.op === "-"
            ? <div>{this.state.num1 + this.state.num2} - {this.state.num1} = <input autoFocus value={this.state.response} onChange={this.onChange} onKeyDown={this.onKeyDown} type="number"></input></div>
            : <div>{this.state.num1} {this.state.op} {this.state.num2} = <input autoFocus value={this.state.response} onChange={this.onChange} onKeyDown={this.onKeyDown} type="number"></input></div> }
        </header>
      </div>
    );
  }
}
