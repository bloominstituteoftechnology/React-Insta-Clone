import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import { SearchBar } from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Posts: []
    };
  }

  componentDidMount() {
    this.setState({Posts: dummyData});
  }

  render() {
    return (
      <Container>
            <SearchBar/>
          <Row>
            <Col xs={6} md={8}>
              <PostContainer posts={this.state.Posts} />
            </Col>
          </Row>
      </Container>
    );
  }
}

export default App;
