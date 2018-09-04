import React, { Component } from 'react';
import Authenticate from './components/Authentication/Authenticate';
import PostsPage from './components/PostContainer/PostsPage';
import './index.css';
import styled from 'styled-components';

const Containerz = styled.div`
	max-width: 500px;
	width: 100%;
	margin: 0 auto;
`



class App extends Component {
  render() {
    return (<Containerz><PostsPage /></Containerz>)
  }
}

export default Authenticate(App);



