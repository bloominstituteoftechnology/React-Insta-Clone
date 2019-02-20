import React from 'react';


const InstaPost = (props) => {

    return (
        <div>

            <div className='instaHeader'>
            <img src={props.instaPost.thumbnailUrl}/>
            <p>{props.instaPost.username}</p>
            </div>

            <img src={props.instaPost.imageUrl}/>



        </div>
    )
}

export default InstaPost