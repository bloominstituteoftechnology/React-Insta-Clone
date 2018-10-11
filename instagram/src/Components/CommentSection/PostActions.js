import React from 'react';
import PropTypes from 'prop-types';
import { Sprite} from '../../Style';

const PostActions = ({likePost, postLiked=false, showInput}) => {
    return (
        <div className="post-actions">
            <div className="action-icons">
                {
                    postLiked
                    ?<Sprite heartRed onClick={likePost} />
                    :<Sprite heart onClick={likePost} />
                }
                <Sprite comment onClick={showInput} />
                <Sprite share />
            </div>
            <Sprite bookmark />
        </div>
    );
}

PostActions.propTypes = {
    likePost: PropTypes.func,
    postLiked: PropTypes.bool,
}

export default PostActions;
