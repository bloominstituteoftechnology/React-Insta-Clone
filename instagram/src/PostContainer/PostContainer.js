import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from "prop-types";


const PostContainer = (props) => {
        return (
            <div className="postContainer">
                {props.data.map(item=>{
                    return (
                        <div key={item.timestamp+'jzk'}>
                            <div className='username-header'>
                                <img src={item.thumbnailUrl} alt='user thumbnail' />
                                <p>{item.username}</p>
                            </div>
                            <img className="postImage" src={item.imageUrl} alt='' />
                            <CommentSection
                                key={item.timestamp}
                                obj={item}
                            />
                        </div>
                    )
                })}
            </div>
        )
}

PostContainer.default = {
    likes: 0,
    comments: {
        text: "Be the first to comment!"
    }
}

PostContainer.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            thumbnailUrl: PropTypes.string,
            imageUrl: PropTypes.string,
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    username: PropTypes.string,
                    text: PropTypes.string
                })
            )
        })
    )
}

export default PostContainer;