import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../../CommentSection/components/Comment';

const Container = props => {
    return ( 
        <div>
            {props.data.map((item, index) => {
                return (
                    <div 
                    class="postContainer"
                    key={index}>
                        <div class="postHeader">
                            <img src={item.thumbnailUrl} />
                            {item.username}
                        </div>
                        <div class="postBody">
                            <img src={item.imageUrl} />
                        </div>
                        <div class="likes">{item.likes} likes</div>
                        <Comment 
                        input={item.comments}
                        />
                    </div> 
                )
            })}
        </div> );
}
// Container.propTypes = {
//     data: PropTypes.shape({
//         thumbnailUrl: PropTypes.string.isRequired,
//         imageUrl: PropTypes.string.isRequired,
//         likes: PropTypes.number.isRequired
//     })
// };
 
export default Container;