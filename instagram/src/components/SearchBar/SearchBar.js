import React, { Component } from "react";
import { Navbar, FormGroup  } from "react-bootstrap";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  handleInput = event => {
    this.setState({ value: event.target.value });
  }

  handleSearch = event => {
    this.props.search(event.target.value);
    this.setState({ value: "" });
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="">Ting's Instagram</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullRight>
              <FormGroup>
                <input type="text" placeholder="Search" onChange={this.handleInput} value={this.state.value} />
              </FormGroup>
              <button type="submit" onClick={this.handleSearch} >Submit</button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default SearchBar;
