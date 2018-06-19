import React from 'react';
import './Search.css';

const SearchBar = props => {
    return (
        <div className='searchbar'>
            <div className='logos'>
                <img className='logo' alt='logo' src='https://cdn.dribbble.com/users/59145/screenshots/2722476/instagram_new_logo.jpg'/>
                <img className='instagram' alt='instagram' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png' />
            </div>
            <div>
                <input type='text'
                className='search'
                placeholder='Search'
                onChange={props.toDoHandler}
                value={props.dataInput}/>
            </div>
            <div className='icons'>
                <div className='share-container'>
                <img className='share-icon' alt='share icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIYtgKIdJZP0tzYF0PpZ6oA06CkzvmfdP8yBkNEEkRox6ptOyTjw' />
                 </div>
                 <img className='heart' alt='heart icon' src='https://png.icons8.com/metro/1600/like.png'/>
                 <img className='friend-icon' alt='friend icon' src='https://d30y9cdsu7xlg0.cloudfront.net/png/682465-200.png'/>
            </div>
        </div>
    )
}

export default SearchBar;