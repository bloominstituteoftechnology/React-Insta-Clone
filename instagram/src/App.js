import React, { Component } from 'react';
import './App.css';
import './application-data.js';
import { Navbar, FormGroup, FormControl } from 'react-bootstrap';
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
            <Navbar.Form pullLeft>
              <FormGroup>
                <a className="Link" href="#">Potatogram</a>
                <FormControl className="SearchBar" type="text" placeholder="Search" />
                <a className="Link Link2" href="#">
                  Like
                </a>
              </FormGroup>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
        <PostList postData ={this.state.postData} />
    </div>
  )
  }
}
export default App;
