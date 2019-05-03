import React from 'react';
import Like from './like.png';
import Message from './bubble.png';


export default function LikeSection(props){
    return(
        <div className='like-section'>

        <div className='like-icons'>

        <img alt='like'src={Like} className='postlike' key='like' onClick={props.incrementLike}></img> 

        <img alt='message'src={Message} className='postmessage'></img>
        
        </div>


        <div className='likes' key='likes'>

        {props.likes} likes
        
        </div>
        
        
        
        </div> //like-section
    )
}


//<div>Icons made by <a href="https://www.flaticon.com/authors/iconnice" title="Iconnice">Iconnice</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

