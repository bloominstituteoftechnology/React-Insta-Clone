import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import moment from 'moment';
import './CommentSection.css';

export default class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            holder: ""
        }
    }
    componentDidMount() {
        this.setState({
            comments: this.props.comments
        })
        localStorage.getItem('comments') && this.setState({
            comments: JSON.parse(localStorage.getItem('comments')),                
        })
    }
    componentWillUpdate(nextProps, state) {
        localStorage.setItem('comments', JSON.stringify(state.comments))
    }
    inputHandler = e => {
        const { value } = e.target;
        this.setState({
            holder : value
        })
    }
    submitHandler = e => {
        e.preventDefault();
        const comment = {
            text: this.state.holder
        }
        this.setState({
            comments: [...this.state.comments, comment], holder: ""
        })
    }   
    
    render() {
        return  <div className="comment-section">
                    {this.state.comments.map(comment => <Comment key={comment.text} username={comment.username} text={comment.text} />)}
                    <span>{moment(this.props.date, "MMMM Do YYYY, hh:mm:ss a").fromNow()}</span>
                    <form onSubmit={this.submitHandler}>
                        <input type="text" onChange={this.inputHandler} placeholder="Add a comment..." className="add-comments" value={this.state.holder}></input>
                    </form>                    
                </div>
    }
}

CommentSection.propTypes = {
    comments: PropTypes.array.isRequired,
    date: PropTypes.string.isRequired
}