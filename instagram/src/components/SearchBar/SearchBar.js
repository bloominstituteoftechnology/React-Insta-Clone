import React, {Component} from 'react';
import {Navbar,Button} from 'react-bootstrap';
import './SearchBar.css';


class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      show:true
    }
  }
  changeState = () =>{
    this.setState({show:!this.state.show});
  }
  render() {
    if(this.state.show === true){
      return (
      <Navbar className="Nav">
        <Navbar.Header>
          <Navbar.Brand>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Form pullRight>
          <input type="text" placeholder="search" />
          <Button onClick={this.changeState}type="submit" className="Show">||||</Button>
        </Navbar.Form>
      </Navbar>
      );
   } 
    else{
      return  <Button onClick={this.changeState}type="submit" className="DontShow">||||</Button>;
    }
  }
}

export default SearchBar
