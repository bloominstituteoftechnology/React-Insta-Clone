import React from 'react';
import './SearchBar.css';
import { Form, FormGroup, Input } from 'reactstrap';
import * as Icon from 'react-feather';

const SearchBar = props => {
  return (
    <div className='searchBar'>
      <div className='seachBarLeft'>
        <Icon.Instagram className='instaIcon' />
        <img className='instaCursive'
          src='https://fontmeme.com/images/instagram-new-logo.png'
          alt='Instagram Cursive' />
      </div>
      <Form>
        <FormGroup>
        <Input 
          type='search'
          name='search'
          onChange={props.searchPosts}
          placeholder='🔍 Search'/>
        </FormGroup>
      </Form>
      <div className='searchBarRight'>
        <Icon.Compass className='navIcons' />
        <Icon.Heart className='navIcons' />
        <Icon.User className='navIcons' />
      </div>
    </div>
  )
}

export default SearchBar;