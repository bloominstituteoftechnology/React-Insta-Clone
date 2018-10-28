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
import {Icon} from '../../Styles/Styles';
import Search from './Search';


class SearchBar extends React.Component {
    constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      props: props,
      isOpen: false,
      posts: this.props.posts,
      };
    }

toggle() {
  this.setState({
  isOpen: !this.state.isOpen
  });
}

logOutHandler = event => {
  event.preventDefault();
  let username = this.state.username;
  window.localStorage.setItem('', username);
  let password = this.state.password;
  window.localStorage.setItem('', password);
  window.location.reload();
}

render() {
  console.log('searchBar props',this.props);
  return (
    <div class="search-container">
    <Navbar className='searchbar' color="white" light expand="md">

    <a href='https://www.instagram.com/'>
    <div className='left-navitems'>
        <Icon type='camera' />
        <Icon type='line' />
        <Icon type ='logo' />
    </div>
    </a>

    <Search
    handleFilter={this.props.handleFilter}
    postFilter={this.state.postFilter}
    posts={this.state.posts}
    changeHandler={this.changeHandler}
    />


    <NavbarToggler onClick={this.toggle} />

                
    <div className='right-navitems'>
    <Nav className="ml-auto" navbar> 
      <NavItem>
        <NavLink href="/components/">
          <Icon type='compass' />
        </NavLink>
      </NavItem>
    </Nav>

    <Nav className="ml-auto" navbar> 
      <Collapse isOpen={this.state.isOpen} navbar>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav>
            <Icon type='love'/>
          </DropdownToggle>
          <DropdownMenu right>
          <DropdownItem onClick={this.state.logOutHandler}>
            <div>Log Out</div>
          </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Collapse>
    </Nav>

    <Nav className="ml-auto" navbar> 
      <NavItem>
        <NavLink href="https://www.instagram.com/the_halal_home/">
          <Icon type='profile' />
         </NavLink>
      </NavItem>
    </Nav>
    </div>
</Navbar>
</div>
   );
  }
}

export default SearchBar;