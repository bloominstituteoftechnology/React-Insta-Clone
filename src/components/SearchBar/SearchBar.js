import React from 'react';
import './SearchBar.css';
import instagramlogo from './logos/instagram_logo.png';
import heart from './logos/heart.png';
import person from './logos/person.png';
import compass from './logos/compass.png';
import { 
  Form, 
  FormGroup,
   Label, 
   Input
 } from 'reactstrap';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="bar" >
        <div className="navbar">
          <div className="instagramlogo" ><a href="App.js" ><img src={instagramlogo} alt={"none"} ></img></a></div>
          <div className="searchbar" ><Form inline>
            <FormGroup  className="searching">
              <Label for="search" className="search-bar"></Label>
              <form onSubmit={this.props.search} onChange={this.props.handleChange}>
              <Input type="search" name="search" id="searchBar" placeholder="Search..." />
              </form>
            </FormGroup>
            </Form>
          </div>
          <div className="navicons" >
            <nav className="nav-items" >
              <a href="none"><img src={compass}  alt={"none"}></img></a>
              <a href="none"><img src={heart} alt={"none"}></img></a>
              <a href="Shrek.js"><img src={person} alt={"none"}></img></a>
            </nav>
           </div>
      </div>
          
          
          
        
      </div>
    );
  }
}
