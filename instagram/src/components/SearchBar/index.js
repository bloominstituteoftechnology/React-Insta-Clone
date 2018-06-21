import React from 'react';
import './style.css';

const SearchBar = (props) => {
    return (
        <div className='search_wrapper'>
            <div className='faSearch'>
                <div className='instaLogo'><i className="fa fa-instagram fa-lg" aria-hidden="true"></i></div>
                <div className='line'>|</div>
                <div className='textInsta'>Instagram</div>
            </div>
            <div className='serachInput'>
                <input type="text" placeholder="Search.." onKeyDown={props.handleSearch} />
            </div>
            <div className='faSearch'>
                <div className='band'><i className="fa fa-bandcamp" aria-hidden="true"></i></div>
                <div className='heart'><i className="fa fa-heart-o" aria-hidden="true"></i></div>
                <div className='user'><i className="fa fa-user-o" aria-hidden="true"></i></div>
            </div>

        </div>
    )
}
 
export default SearchBar;