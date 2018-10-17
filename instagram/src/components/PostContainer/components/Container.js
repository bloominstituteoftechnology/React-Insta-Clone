import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../../CommentSection/components/Comment';

const Container = props => {
    return ( 
        <div>
            {props.data.map((item, index) => {
                return (
                    <div 
                    className="postContainer"
                    key={index}>
                        <div className="postHeader">
                            <img src={item.thumbnailUrl} alt="user thumbnail" />
                            {item.username}
                        </div>
                        <div className="postBody">
                            <img src={item.imageUrl} alt="post" />
                        </div>
                        <div className="likes">{item.likes} likes</div>
                        <Comment 
                        comments={item.comments}
                        />
                    </div> 
                )
            })}
        </div> );
}
Container.propTypes = {
    data: PropTypes.shape({
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired
    })
};
 
export default Container;