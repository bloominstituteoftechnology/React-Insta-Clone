import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import PostPage from './components/PostPage/PostPage'
import Authenticate from './components/Authentication/Authenticate';
import Login from './components/Login/Login';

// STARTING OVER


class App extends Component {
  constructor() {
    console.log('contructor is running');

    super();
    this.state = {
      username: ''
    };
  }

  componentDidMount() {
    const user = localStorage.getItem('user');
    this.setState({ username: user })
  }

  render() {
    console.log('render', this.state.posts);

    return (
      <div className="App">

      <ShowCorrectComponent username={this.state.username} />
                
      </div>
    );
  }
}
  const ShowCorrectComponent = Authenticate(PostPage)(Login);





export default App;
