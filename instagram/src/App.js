import React, { Component } from 'react';
import './App.css';
import { Button, Navbar, FormGroup, FormControl } from 'react-bootstrap';
import postData from './application-data';
import { Data } from './postcontainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: []
    }
  }
  componentDidMount() {
      this.setState({postData});
    }
  render() {
    return (
      <div className="App">
        <Navbar>
        <Navbar.Header>
        <Navbar.Brand>
        <a href="#"><img src="https://image.freepik.com/free-icon/instagram-logo_318-84939.jpg" height="30" alt="instagram img"/></a>
        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Navbar.Form pullLeft>
        <FormGroup>
        <FormControl type="text" placeholder="Search" />
        </FormGroup>
        {' '}
        <Button type="submit">Submit</Button>
        </Navbar.Form>
        </Navbar.Collapse>
        </Navbar>
        <Data postData={this.state.postData} />
      </div>
    );
  }
}

export default App;
