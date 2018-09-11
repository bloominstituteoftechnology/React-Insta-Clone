import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            commentInput: ""
        }
    }

    addNewComment = event => {
        event.preventDefault();
        this.setState({ 
            comments: [
                ...this.state.comments,
                { text: this.state.commentInput, username: "Sunflower" }
            ],
            commentInput: " "
         })
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state.input)
    }

    render() {
        return (
            <div className="CommentSectionDiv">
                {this.state.comments.map((element, index) => <Comment comment={element} key={index}/>)}
                <form onSubmit={this.addNewComment} >
                    <input onChange={this.handleChange} name='commentInput' type="text" placeholder="Add a Comment" />
                </form>
            </div>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection;