import React from 'react';

class Post extends React.Component {
    state = {
        likes: this.props.post.likes
    };

    like = () => {};

    render() {
        return(
        <div className="Post-Container">
            <img src={this.props.thumbnailUrl} alt={"user's thumbnail"}/>
            <div>{this.props.username}</div>
            <img src={this.props.imageUrl} alt ={"user's post"}/>
        </div>
        )
    }
}

export default Post;