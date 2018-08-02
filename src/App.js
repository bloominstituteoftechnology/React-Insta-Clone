import React, { Component } from 'react';
import Authenticate from './components/User/Authenticate';
import Home from './components/User/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    }
  }

  componentDidMount() {
    const user = localStorage.getItem("user");
    this.setState({ username: user });
  }

  render() {
    return (
      <Home />
    );
  }
}

export default Authenticate(App);