import React from 'react';
import Post from './post';
import PropTypes from 'prop-types';

/* Each PostContainer component will then pass the array of comments on each post object as a prop to an instance of the CommentSection component. 

receives from App.js:
data = {this.state.instaData}

send to Post:
username
thumbnailUrl
imageUrl
likes
timestamp

send to comments:
comments
*/

const Posts = props => {
    return (
        <div className="post-container">
            <div>
                {props.data.map(post => <Post 
                    key={post.timestamp}
                    user={post.username}
                    thumbnail={post.thumbnailUrl}
                    postImage={post.imageUrl}
                    likes={post.likes}
                    comments={post.comments}
                    timestamp={post.timestamp}
                    />
                )}
            </div>
            


        </div>
    )
}

Posts.propTypes = {
    posts: PropTypes.shape({
        key: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        postImage: PropTypes.string.isRequired,
        likes: PropTypes.string.isRequired,
        comments: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired,
    })
}

export default Posts