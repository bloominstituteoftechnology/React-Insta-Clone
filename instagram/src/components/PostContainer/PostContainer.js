import React from "react";
import NewPost from  "./NewPost";

const PostContainer = props => {
    return (
        <div className="post-wrapper">
            {this.state.map(p => <NewPost key={p.imageUrl} posts={p} />)}
        </div>
    );
};

export default PostContainer;