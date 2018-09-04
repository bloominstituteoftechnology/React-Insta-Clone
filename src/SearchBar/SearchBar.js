import React from 'react';
import './SearchBar.css';
import instagramlogo from './logos/instagram_logo.jpg';
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
          <div><a href="#" ><img src={instagramlogo} alt={"none"} ></img></a></div>
          <div><Form inline>
            <FormGroup className="searching">
              <Label for="search" className="search-bar"></Label>
              <Input type="search" name="search-bar-name" id="searchBar" placeholder="Search..." />
            </FormGroup>
            </Form>
          </div>
          <div>
            <nav className="nav-items" >
              <a href="#"><img src={compass}  alt={"none"}></img></a>
              <a href="#"><img src={heart} alt={"none"}></img></a>
              <a href="#"><img src={person} alt={"none"}></img></a>
            </nav>
           </div>
      </div>
          
          
          
        
      </div>
    );
  }
}
