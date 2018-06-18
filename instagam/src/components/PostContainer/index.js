import React from 'react';
import './style.css';
import CommentSection from '../CommentSection';

const PostContainer = (props) => {
    console.log('post cont props: ', props)
    return ( 
        <div>

            {props.passedState.map((item, i) => {
                return ( 
                    <div key={i} >
                    <div className='userNameContent' >
                        <img src={item.thumbnailUrl} className='thumbImg' />
                        <h4>{item.username}</h4>
                    </div>
                        <img src={item.imageUrl} className='postImg' />
                        <div>
                            
                        </div>
                        <CommentSection passedItem={item.comments} />
                    </div>
                )
            })}
            
        </div>
    )
}
 
export default PostContainer;