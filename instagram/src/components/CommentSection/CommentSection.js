import React, {Component} from "react";
import Comment from './Comment';
import PropTypes from 'prop-types';
import './CommentSection.css';


class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            current: '',
            isEmpty: true,
            time: props.time
        };
    }

    addNewComment = e => {
        e.preventDefault();
        this.setState({
            comments: this.state.comments.concat({
                text: this.state.current,
                username: 'Jurgen'
            })
        })
    }

    handleInputChange = e => {
        this.setState({
            current: e.target.value,
        });
    };
    render() {
        return (
            <div className='comment-section'>
                {this.state.comments.map((comment, index) => 
                <Comment 
                    key={index} 
                    user={comment.username} 
                    text={comment.text}
                />)}
                <p>{this.state.time}</p>
                <form onSubmit={this.addNewComment}>
                    <input 
                        onChange={this.handleInputChange}
                        className='comment-section-input'
                        type='text'
                        placeholder='Add Comment'
                    />
                </form>
                <hr/>
            </div>
        )
    }
};

CommentSection.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string,
    time: PropTypes.string
};


export default CommentSection;