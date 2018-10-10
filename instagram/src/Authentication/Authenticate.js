import React, { Component } from 'react';

const Authenticate = App =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (localStorage.getItem('username')) {
        this.setState({
          loggedIn: true
        });
      }
    }

    render() {
      return <App loggedIn={this.state.loggedIn} />;
    }
  };

export default Authenticate;
