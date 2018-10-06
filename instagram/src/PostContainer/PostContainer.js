import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from "prop-types";


const PostContainer = (props) => {
        return (
            <div>
                {props.data.map(item=>{
                    return (
                        <div>
                            <div className='username-header'>
                                <p>{item.username}</p>
                                <img src={item.thumbnailUrl} alt='user thumbnail' />
                            </div>
                            <img src={item.imageUrl} alt='' />
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