import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.dummyData,
            input: '',
            placeholder: 'Add a comment...'
        };
    }

    changeInput = event => this.setState({input: event.target.value});

    addNewComment = (event, i) => {
        event.preventDefault();
        const comments = this.state.comments.slice();
        comments.push({text: this.state.input, username: 'username'});
        this.setState({comments, input: ''});
    }

    render() {
        return (
            <div className="comment-section">
                {this.state.comments.map(comment => (
                    <div className="custom-comment" key={Math.random()}>
                        <p>{comment.username}</p>
                        <p>{comment.text}</p>
                    </div>
                ))}
                <form onSubmit={this.addNewComment}>
                    <input type="text" onChange={this.changeInput} placeholder={this.state.placeholder} value={this.state.input} />
                </form>
            </div>
        )    
    }
    
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ username: PropTypes.string, text: PropTypes.string })
    )
};
 
export default CommentSection;