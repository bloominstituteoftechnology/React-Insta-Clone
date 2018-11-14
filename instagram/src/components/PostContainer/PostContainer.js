import React, {Component, Fragment} from 'react';
import Post from './Post';
import PropTypes from 'prop-types';


class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: props.posts
        }
    }

    static getDerivedStateFromProps(nextProps) {
        let posts = nextProps.posts.filter(postElement => postElement.username.includes(`${nextProps.searchQuery}`));
        return ({
            posts
        });
    }

    render() {
        return (
            <Fragment>
                {this.state.posts.map((postElement, index) => <Post post={postElement} key={index} />)}
            </Fragment>
        );
    }
    
}


PostContainer.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object)
}


export default PostContainer;