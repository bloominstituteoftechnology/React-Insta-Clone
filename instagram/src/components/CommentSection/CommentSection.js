import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import moment from 'moment';
import LikesSection from './LikesSection';
import './CommentSection.css';

export default class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            likes: 0,
            holder: "",
            bool: false
        }
        //window.unbeforeunload = this.savingComments;
    }
    componentDidMount() {
        this.setState({
            comments: this.props.comments,
            likes: this.props.likes
        })
        localStorage.getItem('comments') && this.setState({
            comments: JSON.parse(localStorage.getItem('comments')),                
        })
    }
    savingComments = () => {
        localStorage.setItem('comments', JSON.stringify(this.state.comments))
    }
    inputHandler = e => {
        const { value } = e.target;
        this.setState({
            holder : value
        })
    }
    addNewComment = e => {
        e.preventDefault();        
        this.setState({
            comments: [...this.state.comments, {text: this.state.holder}], holder: ""
        })
        this.savingComments()      
    }
    likeHandler = (e) => {        
        this.setState({
            bool: !this.state.bool
        })
    }
    
    render() {
        return  <div className="comment-section">
                    <LikesSection bool={this.state.bool} likes ={this.state.bool ? this.state.likes + 1 : this.state.likes} likeHandler={this.likeHandler} />
                    {this.state.comments.map(comment => <Comment key={Math.random()+comment.text} username={comment.username} text={comment.text} />)}
                    <span>{moment(this.props.date, "MMMM Do YYYY, hh:mm:ss a").fromNow()}</span>
                    <form onSubmit={this.addNewComment}>
                        <input type="text" onChange={this.inputHandler} placeholder="Add a comment..." className="add-comments" value={this.state.holder}></input>
                        <i className="fas fa-ellipsis-h"></i>
                    </form>                    
                </div>
    }
}

CommentSection.propTypes = {
    comments: PropTypes.array.isRequired,
    date: PropTypes.string.isRequired
}