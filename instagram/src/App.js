import React, { Component } from 'react';
import './App.css';
import { postData } from './application-data';
import PostList from './PostList.js';
import { Grid, Row, Col, FormControl } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: []
    }
  }
  componentDidMount() {
    this.setState({postData: postData})
  }
  render() {
    return (
      <div className="App">
        <Grid className="NavBar">
          <Row className="show-grid">
            <Col md={4} className="Logo"></Col>
            <Col md={4} clasName="SearchForm">
              <FormControl type="text" placeholder="Search" results="0" />
            </Col>
            <Col md={4}>
              <div className = "Icons Explore"></div>
              <div className = "Icons Activity"></div>
              <div className = "Icons User"></div>
            </Col>
          </Row>
        </Grid>
        <PostList post={this.state.postData} />
      </div>
    );
  }
}

export default App;
