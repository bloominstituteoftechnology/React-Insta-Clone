import React from 'react';
import './SearchBar.css'
import gramhead from './gramhead.png';
import gramlogo from './gramlogo.png';
import instaheart from '../CommentSection/instaheart.png';
import instaloco from './instaloco.png';
import instaperson from './instaperson.png';

function SearchBar(props) {
    return (
        <div className='search-container'> 
            <div className='search-imgs'>
                <div className='title'>
                    <img src={gramhead}/>
                </div>
                <p>|</p>
                <div className='logo'>
                    <img src={gramlogo}/>
                </div>
            </div>

            <form>
                <input placeholder='Search'/>
            </form>

            <div className='search-icons'>
                <img alt='heart' src={instaheart}/>
                <img alt='location' src={instaloco}/>
                <img alt='person' src={instaperson}/>
            </div>

        </div>

    );
}

export default SearchBar; 
