import React from 'react'
import PostContainer from './PostContainer'

class PostsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    } 
    render() {
        return (
            <div>
                {this.props.passedData.map((post, i) => (
                    <PostContainer
                        key={i}
                        postComments={post.comments}
                        postStarter={post.username}
                        postThumb={post.thumbnailUrl}
                        postImage={post.imageUrl}
                        postLikes={post.likes}
                    />
                ))}
            </div>
        )
    }
}

export default PostsPage;
