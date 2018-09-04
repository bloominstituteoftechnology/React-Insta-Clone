import React from 'react';
import './Post.css';

const Likes = (props)=> {
    return (
        <div className='likes-section' onClick={props.addLike}>
            <div className='likes-icons'>
            <div className='icon heart'>
                <img className='heart-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_LktPZC6w-ymgFFTzKvQn7LXQyyZs5mlIm9zgjOiHzyBkvEFD'/>
            </div>
            <div className='icon bubble'>
                <img className='bubble-img' src='https://cdn2.iconfinder.com/data/icons/web-and-mobile-ui-volume-11/48/517-512.png' />
            </div>
            </div>
            <div className='likes-number'>
                {props.likes} likes
            </div>
        </div>
    );
}

export default Likes;