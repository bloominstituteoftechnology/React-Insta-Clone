import React from 'react';
import './SearchBar.css';


const SearchBar = (props)=> {
    return (
        <div className='searchbar'>
            <div className='logo-div'>
                <img onClick={props.logOut} src='https://images.vexels.com/media/users/3/137201/isolated/preview/83b5f2a86fa0ec9f938664da94a9bc55-instagram-silhouette-stroke-logo-by-vexels.png' className='logo-img' />
            </div>
            <div className='search'>
                <input className='search-input' type='text' placeholder='Search' onKeyDown={props.searchedPost} />
            </div>
            <div className='icons-div'>
                <div className='icons compass'>
                    <img className='compass-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5EGMr2m-B9HnZjVtAvKbpZMOw8sn3CiKb1Nex3gFvKIZ0vjosTA'/>
                </div>
                <div className='icons heart'>
                    <img className='heart-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_LktPZC6w-ymgFFTzKvQn7LXQyyZs5mlIm9zgjOiHzyBkvEFD'/>
                </div>
                <div className='icons person'>
                    <img className='person-img' src='http://www.iconarchive.com/download/i93784/custom-icon-design/silky-line-user/user.ico'/>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;