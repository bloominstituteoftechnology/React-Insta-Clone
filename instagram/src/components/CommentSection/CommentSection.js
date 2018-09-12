import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            commentInput: "",
            likes: props.likes
        }
    }

    addNewComment = event => {
        event.preventDefault();
        this.setState({ 
            comments: [
                ...this.state.comments,
                { username: "Sunflower", text: this.state.commentInput,  }
            ],
            commentInput: ""
         })
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state.input)
    }

    increaseLikes = event => {
        event.preventDefault();
        this.setState({ likes: this.state.likes + 1 })
        console.log('Like button Count:', this.state.likes);
    }

    render() {
        return (
            <div className="CommentSectionDiv">
            <div className="Buttons">
                <img onClick={this.increaseLikes} src="https://static.thenounproject.com/png/682470-200.png" alt="" />
                <img src="https://static.thenounproject.com/png/682476-200.png" alt="" />
            </div>
            <div className="Likes">{this.state.likes} likes</div>
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