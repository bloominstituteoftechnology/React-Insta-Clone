import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import {Container, Row, Col } from 'reactstrap';
import Logo from './instagram.png';
import PostContainer from './components/PostContainer/Post';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
    }
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row className="SearchBar">
            <Col xs="5" className="d-flex align-items-center">
              <a href=".SearchBar"><i className="fab fa-instagram fa-2x col-3"></i></a>
              <a href=".SearchBar"><img className='logo' src={Logo} alt="Instagram Logo" /></a>
            </Col>
            <Col xs="5" className="d-flex align-items-center">
              <input type="text" placeholder="&#xf002; Search" className="fa-search" />
            </Col>
            <Col xs="2" className="d-flex justify-content-between align-items-center">
              <a href=".SearchBar"><i className="far fa-compass fa-lg"></i></a>
              <a href=".SearchBar"><i className="far fa-heart fa-lg"></i></a>
              <a href=".SearchBar"><i className="far fa-user fa-lg"></i></a>
            </Col>
          </Row>
        </Container>
        <PostContainer data={this.state.data}/>
      </div>
    );
  }
}

export default App;
