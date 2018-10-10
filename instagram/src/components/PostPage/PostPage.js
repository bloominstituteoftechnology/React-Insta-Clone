import React from 'react';
import Post from '../Post/Post';

class PostPage extends React.Component {
    render() {
        return (
            <div className="posts">
                {
                    this.renderFilterSearch(this.props.posts).map(post => (
                    <Post
                        key={post.username + post.timestamp}
                        username={post.username}
                        thumbnailUrl={post.thumbnailUrl}
                        imageUrl={post.imageUrl}
                        likes={post.likes}
                        timestamp={post.timestamp}
                        comments={post.comments}
                    />
                    ))
                }
            </div>
        )
    }

    //------------------------------------------------
    renderFilterSearch(postArray) {
        return postArray.filter(post => {
        if(!this.props.authorQuery){ return true;}
        return (post.username === this.props.authorQuery);
        })
    }
}

export default PostPage;
