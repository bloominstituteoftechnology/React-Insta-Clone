import React from 'react';
import './style.css';
import CommentSection from '../CommentSection';

const PostContainer = (props) => {
    console.log('post cont props: ', props)
    return ( 
        <div>

            {props.passedState.map((item, i) => {
                return ( 
                    <div key={i} className='post_container'>
                        <div className='userNameContent' >
                            <img src={item.thumbnailUrl} className='thumbImg' alt='thumbnail' />
                            <h4>{item.username}</h4>
                        </div>
                        <img src={item.imageUrl} className='postImg' alt='Post' />
                        <div className='likesPostImg'>
                            <div>
                                <i className="fa fa-heart-o" aria-hidden="true"></i> 
                                <i className="fa fa-comment-o" aria-hidden="true"></i>
                            </div>
                            <div>
                                {item.likes} likes
                            </div>
                        </div>
                        <div className='commentSection'>
                            <CommentSection passedItem={item.comments} />
                        </div>
                        <div className='dateStamp'>
                            {item.timestamp}
                        </div>
                        <hr />
                        <div className='footerCom'>
                            <p>Add a comment...</p>
                            <p>...</p>
                        </div>

                    </div>
                )
            })}
            
        </div>
    )
}
 
export default PostContainer;