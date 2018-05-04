import React, { Component } from 'react';
import dummyData from './dummy-data';
import logo from './logo.svg';
import './App.css';

import PostContainer from './components/PostContainer/PostContainer'
import { Container } from 'reactstrap';




class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    // taking people, from people.js
    // calling setState to add people to our friends array.
    // ANY type of data fetching, SHOULD exist inside of CDM
    this.setState({ users: dummyData });
  }

  render() {
    return (
      <div >
        <Container>
          {this.state.users.map( (x, i) => <PostContainer key={i} boo={x} />)}
        </Container>
      </div>
    );
  }
}

export default App;
