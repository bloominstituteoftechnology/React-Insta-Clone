import React from 'react';
import InstaCam from '../../img/insta_cam.png';
import InstaScript from '../../img/insta_script.png';
import InstaLocal from '../../img/insta_comment.png';
import InstaLike from '../../img/insta_strokeHeart.png';
import InstaFriend from '../../img/insta_friend.png';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <header className='searchHeader'>
            <div className='branding'>
                <img onClick={props.signOut} className='instaCam' src={InstaCam} alt='Instagram Camera' />
                <img className='instaScript' src={InstaScript} alt='Instagram Script' />
            </div>
            <input className='searchInput' name='searchBar' type='text' placeholder='Search' />
            <div className='searchIcons'>
                <img className='instaLocal' src={InstaLocal} alt='location search button' />
                <img className='instaLike' src={InstaLike} alt='like button' />
                <img className='instaFriend' src={InstaFriend} alt='friend request' />
            </div>
        </header>
    )
};

export default SearchBar;