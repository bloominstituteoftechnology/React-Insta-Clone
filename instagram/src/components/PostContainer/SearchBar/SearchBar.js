import React from 'react';
import './SearchBar.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import Search from './Search';


class SearchBar extends React.Component {
    constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      props: props,
      isOpen: false,
      posts: this.props.posts
          };
     }

toggle() {
  this.setState({
  isOpen: !this.state.isOpen
  });
}




render() {
  console.log('searchBar props',this.props);
  return (
    <div className='searchbar'>

    <Navbar color="white" light expand="md">

    <div className='navitems'>
      <a href='https://www.instagram.com/' className='navitems-left'>
        <div className='icon' id='camera'></div>
        <div className='line'></div>
        <div className='icon' id='logo'></div>
      </a>

    <Search
    handleFilter={this.props.handleFilter}
    postFilter={this.state.postFilter}
    posts={this.state.posts}
    changeHandler={this.changeHandler}
    />


    <NavbarToggler onClick={this.toggle} />

                
    <div className='navitems-right'>
    <Nav className="ml-auto" navbar> 
      <NavItem>
        <NavLink href="/components/">
          <div className='icon' id='compass'></div>
        </NavLink>
      </NavItem>
    </Nav>

    <Nav className="ml-auto" navbar> 
      <Collapse isOpen={this.state.isOpen} navbar>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav>
            <div className='icon heart' id='heart'></div>
          </DropdownToggle>
          <DropdownMenu right>
          <DropdownItem>
          </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Collapse>
    </Nav>

    <Nav className="ml-auto" navbar> 
      <NavItem>
        <NavLink href="https://www.instagram.com/the_halal_home/">
          <div className='icon' id='profile'></div>
         </NavLink>
      </NavItem>
    </Nav>
                  
    </div>
    {/* </Nav> */}
    </div>
</Navbar>
</div>
   );
  }
}

export default SearchBar;