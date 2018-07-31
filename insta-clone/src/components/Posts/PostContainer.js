import React from 'react';
import propTypes from 'prop-types';
import Posts from './Post'


class PostContainer extends React.Component {
    constructor(props) {
        super();
        // console.log(this);
        this.state = {
            posts: props.values
     
        }
    }
    render() {
        return(
            <div className="postContainer">
            {this.state.posts.map(post=> <Posts obj={post} key={post.timestamp} />)}
            </div>
        )
    }
}

PostContainer.propTypes = {
    thumbnail: propTypes.string,
    images: propTypes.string,
    username: propTypes.string,
    likes: propTypes.number,
    comment: propTypes.arrayOf(propTypes.object)

}

export default PostContainer;