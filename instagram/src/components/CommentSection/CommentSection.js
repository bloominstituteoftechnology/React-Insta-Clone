import React from 'react';
import dummyData from '../../dummy-data';
import PropTypes from 'prop-types';
import './CommentSection.css';

const CommentSection = () => {

    // const {username, timestamp} = props.Data;
    const LikeButton = () => (
        <i className="fa fa-heart like-button" />
    )

    const Comment = () => (
        <i className="fa fa-comment comment "/>
    )
    return(
        <div cmntSectDiv>
        {dummyData.map(item => <div key={item.username}>
            {item.username}

            <img alt="" src={item.thumbnailUrl} />
            <img alt="" src={item.imageUrl} />
            <div>{item.likes}</div>
            <div>{item.timestamp}</div>
            <LikeButton />
            <Comment />
            <input />
            
            <div>{item.comments.map(item =>
            
            <div key={item.comments[0]}>
            </div>
            )}</div>

            {/* In theory I feel like I should be able to nest a map method
            within a map method, so long as the parameters match and the values resolve correctly. */}

        </div>)}
        <input />
        </div>
    )
}

CommentSection.propTypes = {
    dummyData: PropTypes.arrayOf(
        (CommentSection.defaultProps ={
            Data: PropTypes.shape({
                username: PropTypes.string.isRequired,
                likes: PropTypes.number.isRequired,
                comments: PropTypes.array.isRequired,
                
            })

        })

    )
}
export default CommentSection