import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import Search from './components/SearchBar/SearchBar';
import PostPage from './components/PostContainer/PostPage';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   Container,
//   Row,
//   Col,
//   Jumbotron,
//   Button
// } from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      input: []
    };
  }
  componentDidMount(){
    this.setState({data:dummyData});
  }
  search = e => {
    this.setState({input: e.target.value});
  }
  filter = (e) => {
    e.preventDefault();
    let result = this.state.input; 
    let filtered = this.state.data.filter(data => data.username.includes(result));
    this.setState({data: filtered});
  }
  render() {
    return (
      <div className="container">
          <Search searchUser={this.search} result={this.filter} />
          <PostPage posts={this.state.data} />
      </div>
    );
  }
}

export default App;
