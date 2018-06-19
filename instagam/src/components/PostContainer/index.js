import React from 'react';
import './style.css';
import CommentSection from '../CommentSection';
import PropTypes from 'prop-types'

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
                            <input type='text' onChange={props.changeProps} placeholder='Add a comment...' />
                            <button onClick={item.clickProp}>...</button>
                        </div>

                    </div>
                )
            })}
            
        </div>
    )
}
 

CommentSection.propTypes = {
    passedState: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        text: PropTypes.string,

    })
}

export default PostContainer;

