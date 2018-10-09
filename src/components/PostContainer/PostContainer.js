import React, {Component} from 'react';
import PropTypes from "prop-types";
import PostHeader from './PostHeader';
import LikesContainer from './LikesContainer';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

// Body of the container

//const PostContainer = (props) => {
class PostContainer extends Component {
    // Props taken in:
    // key: 0
    // username: "philzcoffee",
    // thumbnailUrl:
    // imageUrl:
    // likes: 400,
    // timestamp: "July 17th 2017, 12:42:40 pm",
    // comments: []
    // likesHandler: ()
    constructor(props) {
        super(props);
        this.state = {...props, input: ""};
        console.log("PostContainer: ", this.state );
    };

    /* Increment number of likes for this post */    
    likesHandler = event => {
        this.setState((prevState) => ({ likes: prevState.likes + 1}));
    };

    /* Log the keypress */
    handleComment = event => {
        //debugger;
        // Was it the return key that was hit?
        event.preventDefault();
        if( event.keyCode === 13 ) {
            let updatedComments = this.state.comments;
            updatedComments.push({
                username: "Guest",
                text: event.target.value
            });
            console.log("updatedComments", updatedComments);
            this.setState({
                comments: updatedComments,
                input: ""
            }, console.log(this.state.comments));
            /* Clear the form entry */
            event.target.value = "";
        }
        else {
            console.log(event.target.value);
            // Keep recording
            this.setState({ input: event.target.value }, console.log(this.state.input));
        }
        console.log("input", this.state);
    };


    render() {
        return (
            <div className='postContainer'>
                <PostHeader username={this.state.username} thumbnailUrl={this.state.thumbnailUrl} />
                <img className='postContainerImg' src={this.state.imageUrl} alt='' />
                <LikesContainer likes={this.state.likes} postId={this.state.id} likesHandler={this.likesHandler} />
                <CommentSection 
                    comments={this.state.comments} 
                    timestamp={this.state.timestamp}
                    handleComment={this.handleComment} />
            </div>
        );
    };
};

// All fields are required...
PostContainer.propTypes = {
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array
};

// Default values
PostContainer.defaultProps = {
    likes: 0,
//    timestamp: Date.now()
  };

export default PostContainer;