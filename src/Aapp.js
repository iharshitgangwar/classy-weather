import React from "react"
class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = { count: 5 }
    // wee need to bind it because other
    this.handleMinus = this.handleMinus.bind(this)
    this.handlePlus = this.handlePlus.bind(this)

  }
  handleMinus() {
    this.setState(el => { return { count: el.count - 1 } })
  }
  handlePlus() {
    this.setState(el => { return { count: el.count + 1 } })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleMinus}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.handlePlus}>+</button>
      </div>)
  }
}

export default Counter;