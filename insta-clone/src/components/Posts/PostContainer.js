import React from 'react';
import propTypes from 'prop-types';
import Posts from './Post'


class PostContainer extends React.Component {
    constructor(props) {
        super(props);
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
    posts: propTypes.arrayOf(propTypes.object)

}

export default PostContainer;