import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authenticate/Authenticate';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
  padding-bottom: 50px;
  background-image: url('https://images.pexels.com/photos/490411/pexels-photo-490411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: ''
    }
  }

  componentDidMount() {
    const user = localStorage.getItem('user');
    this.setState({ username: user });
  }

  render() {
    return (
      <AppContainer>
        <PostsPage />
      </AppContainer>
    );
  }
}

export default Authenticate(App);
