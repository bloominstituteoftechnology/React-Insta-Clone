import React from 'react';
import PostContainer from './PostContainer';

const PostsPage = props => {
    return (
        <div>
            {props.data.map((post, index) => 
                <PostContainer postInfo={post} 
                            key={index}
                            commentKey={index}
                            addNewComment={this.addNewComment}
                            updateComment={this.updateComment} />
            )}
        </div>

    );
}

export default PostsPage;