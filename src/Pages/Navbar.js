import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#" className="right">Contact</a>
      </div>
    )
  }
}
