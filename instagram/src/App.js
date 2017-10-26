import { Navbar, FormGroup, FormControl, Nav } from 'react-bootstrap';
import React, { Component } from 'react';
import './App.css';
import './application-data.js';
import { postData } from './application-data';
import PostList from './postData.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: []
    }
  }
  componentDidMount() {
    this.setState({ postData })
  }
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Collapse>
            <Nav className="NavBar">
              <a className="Link Link1" href="#">Potatogram</a>
              <Navbar.Form>
                <FormGroup>
                  <FormControl className="SearchBar" type="text" placeholder="Search" />
                </FormGroup>
              </Navbar.Form>
              <a className="Link Link2" href="#">Like</a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <PostList postData ={this.state.postData} />
    </div>
  )
  }
}
export default App;

