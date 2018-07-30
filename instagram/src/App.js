import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import Search from './components/SearchBar/SearchBar';
import Post from './components/PostContainer/PostContainer';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

class App extends Component {
  constructor(){
    super();
    this.state = {data:dummyData};
  }
  render() {
    return (
      <div className="container">
          <Search />
          <Post posts={this.state.data} />
          <Row></Row>
      </div>
    );
  }
}

export default App;
