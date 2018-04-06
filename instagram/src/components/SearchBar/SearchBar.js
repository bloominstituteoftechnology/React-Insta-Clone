import React from "react";
import { Button } from 'reactstrap';


const SearchBar = props => {
    return (
    <div className='search-bar'>
    <img className='insta-logo' src="http://www.freelogovectors.net/wp-content/uploads/2016/12/instagram-logo1.png"/>
    <img className='insta-text' src="https://cdn.worldvectorlogo.com/logos/instagram-1.svg"/>
    <input className='input-bar'
      type="text"
      name="newToDo"
    //   value={}
      placeholder="Search"
    //   onChange={}
    />
    <div className='icons'>
    <img className='icon' src="https://cdn.pixabay.com/photo/2013/07/12/16/56/compass-151536__340.png"/>
    <img className='icon-heart' src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/heart-outline-512.png" />
    <img className='icon' src="https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-256.png" />
    </div>
    </div>
   
    );
};

export default SearchBar;