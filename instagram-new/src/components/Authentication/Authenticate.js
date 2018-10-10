import React, { Component } from 'react';

const Authenticate = PostsPage => LoginPage =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
      }
    }

    componentDidMount() {
      if(localStorage.getItem('username').length > 0) {
        this.setState({loggedIn: !this.state.loggedIn})
      }
    }

    render() {
      if(this.state.loggedIn) {
        return <PostsPage />
      }
      return <LoginPage login = {this.props.login} inputChange = {this.props.inputChange}/>;
    }
  };

export default Authenticate;