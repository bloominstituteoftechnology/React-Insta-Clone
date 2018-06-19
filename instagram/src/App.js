import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import {Row, Col } from 'reactstrap';
import Logo from './instagram.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
    }
  }

  render() {
    return (
      <div className="App container">
        <Row className="SearchBar">
          <Col xs="5" className="d-flex justify-content-start align-items-center pl-0">
            <a href="#"><i className="fab fa-instagram fa-3x col-3"></i></a>
            <a href="#"><img src={Logo} alt="Instagram Logo"/></a>
          </Col>
          <Col xs="5" className="d-flex align-items-center">
            <input type="text" placeholder="&#xf002; Search" className="fa-search"/>
          </Col>
          <Col xs="2" className="d-flex justify-content-between align-items-center">
            <a href="#"><i className="far fa-compass fa-lg"></i></a>
            <a href="#"><i className="far fa-heart fa-lg"></i></a>
            <a href="#"><i className="far fa-user fa-lg"></i></a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
