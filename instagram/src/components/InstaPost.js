import React from 'react';


const InstaPost = (props) => {
    
    return (
        <div>

            <div className='instaHeader'>
            <img src={props.instaPost.thumbnailUrl}/>
            <p>{props.instaPost.username}</p>
            </div>

            <img src={props.instaPost.imageUrl}/>

            <div className='instaIcons'>
            <i id='icon' class="far fa-heart"></i>
            <i id='icon' class="far fa-comment"></i>
            </div>

            <div className='instaFooter'>
           <p className='likes'>{`${props.instaPost.likes} likes`}</p>
            </div>

        </div>
    )
}

export default InstaPost