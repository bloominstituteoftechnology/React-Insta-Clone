import React from 'react';
import Comment from './Comment.js';
import '../ig.css';
import PropTypes from 'prop-types';

// const CommentSection = props =>
class CommentSection extends React.Component {

    state = {
        comments: [],
        commentinput: "",
        usernameinput:""
    }

    componentDidMount () {
    this.setState = {
        comments: this.props.comments
        }
    }

    addNewComment = (event) => {
        event.preventDefault();

        const comm  = {
            username: event.target.value,
            text: event.target.value,
            index: ""
          }

        this.setState ({
            comments: this.state.comments.concat([{comm}]),
        });
        
    }

    render() {
    return (
        <div className="commentSection">
            {/* Create input form for new comments */}
            <form className="commenting" onSubmit={this.addNewComment}>
                <input className="usernameInput" name="usernameinput" placeholder="username" />
                <input className="commentInput" name="commentinput" placeholder="thoughts..?"/>
                <input type="submit" value="Say what'chu gon' say, bruh."/>
            </form>
            {/* breakdown array of comments and pass each item in to <Comment/> */}
            {this.props.comments.map(comm => <Comment comments={comm}/>)}
        </div>
    )}
}

CommentSection.propTypes = {
    comments: PropTypes.array.isRequired
};

export default CommentSection;