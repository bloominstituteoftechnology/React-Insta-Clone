import React from 'react';


class PostContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
            thumbnail: props.values.thumbnailUrl,
            images: props.values.imageUrl,
            username: props.values.username
        }
    }
    render() {
        return(
            <div className="postContainer">
               <h4><img src={this.state.thumbnail} alt="userIcon" />{this.state.username}</h4>
               <img src={this.state.images}  alt="insta"/>
            </div>
        )
    }
}

export default PostContainer;