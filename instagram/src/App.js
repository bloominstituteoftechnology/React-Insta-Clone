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
  constructor(props){
    super(props);
    this.state = {data: []};
  }
  componentDidMount(){
    this.setState({data:dummyData});
  }
  render() {
    return (
      <div className="container">
          <Search />
          <Post posts={this.state.data} />
      </div>
    );
  }
}

export default App;
