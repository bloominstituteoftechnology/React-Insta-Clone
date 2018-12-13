import React from 'react';
import Post from './post';

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
                    />
                )}
            </div>
            


        </div>
    )
}

export default Posts