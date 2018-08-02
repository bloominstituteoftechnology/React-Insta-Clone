import React, { Component } from 'react';
import './App.css';
import Authenticate from './components/Authentication/Autheticate';
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
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
      <div className="container">
          <PostPage />
      </div>
    );
  }
}

export default Authenticate(App);
