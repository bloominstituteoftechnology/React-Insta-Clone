import React from 'react'
import logo from '../../images/instagram-logo.png'
import './SearchBar.css'

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Input,
  Form
} from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ searchPosts, inputHandler, search }) => {
  return (
    <div>
      {/* { console.log(searchPosts) } */}
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'><img src={logo} alt='Logo' /></NavbarBrand>
        <Nav className='ml-auto' navbar>
          <NavItem className='search-bar'>
            <FontAwesomeIcon className='search' icon={faSearch} />
            <Form>
              <Input
                name='search'
                type='text'
                placeholder='Search users...'
                onChange={inputHandler}
                value={search}
                // onSubmit={searchPosts}
                // onKeyDown={searchPosts}
              />
            </Form>

          </NavItem>
          <NavItem>
            <FontAwesomeIcon className='compass' icon={faCompass} spin />
            <FontAwesomeIcon className='heart' icon={faHeart} />
            <FontAwesomeIcon className='user' icon={faUser} />
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}


export default SearchBar