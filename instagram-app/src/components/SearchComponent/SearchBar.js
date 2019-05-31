import React, { Component } from 'react'
import logo from '../../images/instagram-logo.png'
import dummyData from '../../dummy-data'
import './SearchBar.css'

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Input
} from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      filteredPosts: [],
    }
  }

  componentDidMount() {
    this.setState({ posts: dummyData })
  }

  searchPostsHandler = e => {
		const posts = this.state.posts.filter(post => {
		  if (post.username.includes(e.target.value)) {
			return post
      }
      return this.state.filteredPosts
		})
		this.setState({ filteredPosts: posts })
	}

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/"><img src={logo} alt='Logo' /></NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem className='search-bar'>
                  <FontAwesomeIcon className='search' icon={faSearch} />
                  <Input
                    type="search"
                    placeholder='Search'
                    value={this.state.username}
                    onKeyDown={this.state.searchPostsHandler}
                  />
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
}