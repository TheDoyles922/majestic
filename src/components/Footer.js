import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Footer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="footer fixed-bottom"><NavLink to="/contact">Contact</NavLink></div>
    )
  }
}
