import React from 'react';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// images
import InstaCam from '../../img/insta_cam.png';
import InstaScript from '../../img/insta_script.png';
import InstaLocal from '../../img/insta_comment.png';
import InstaLike from '../../img/insta_strokeHeart.png';
import InstaFriend from '../../img/insta_friend.png';

import { SearchHeader } from '../Styles/Styles';

const SearchBar = props => {
    return (
        <SearchHeader>
            <div className='branding'>
                <img className='instaCam' src={InstaCam} onClick={props.signOut} alt='Instagram Camera' />
                <img className='instaScript' src={InstaScript} alt='Instagram Script' />
            </div>
            <input name='searchBar' type='text' placeholder='Search' />
            <div className='searchIcons'>
                {/* <FontAwesomeIcon icon={faCompass} />
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faUser} /> */}
                <img src={InstaLocal} alt='location search button' />
                <img src={InstaLike} alt='like button' />
                <img src={InstaFriend} alt='friend request' />
            </div>
        </SearchHeader>
    )
};

export default SearchBar;