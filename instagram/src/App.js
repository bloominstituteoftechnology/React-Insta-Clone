import React, { Component } from "react";
import styled from 'styled-components';
import Authenticate from './Authentication/Authenticate';
import PostsPage from "./components/PostContainer/PostsPage";
 
const Appy = styled.div`
  text-align: center;
  max-width: 600px;
  width: 100%;
  margin: auto;
`;


class App extends Component {
  constructor() {
    super();
    this.state = {
      username: ''
    };
  }

  componentDidMount() {
    const user = localStorage.getItem('user')
    this.setState({username: user})
  }
//the key is that such configuration should be done at the highest level component of your app (the root component). That means 99% of your components should probably not use componentWillMount.

  render() {
    return (
      <Appy>
        <PostsPage />
      </Appy>
    );
  }
}

export default Authenticate(App);


