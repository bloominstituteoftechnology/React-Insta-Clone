import React, {Component} from "react";
import Comment from './Comment';
import PropTypes from 'prop-types';


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

    addComment = e => {
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
                {
                this.state.comments.map((comment, index) => 
                <Comment key={index} user={comment.username} text={comment.text}/>)
                }
                <p>{this.state.time}</p>
                <hr/>
                <form onSubmit={this.addComment}>
                    <input 
                        onChange={this.handleInputChange}
                        className='comment-section-input'
                        type='text'
                        placeholder='Add Comment'
                    />
                </form>
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