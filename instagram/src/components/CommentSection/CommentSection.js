import React, { Component } from 'react';
import './CommentSection.css';
import PropTypes from "prop-types";
import Comment from './Comment';
import CommentInput from './CommentInput';
import moment from 'moment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            likes: props.likes,
            timestamp: props.timestamp,
            inputText: '',
            removed: false
        }
    }

    componentDidMount() {
        const id = this.props.postId
        if (localStorage.getItem(id)) {
            // If id exists, set the commments by that parsed array
            this.setState({comments: JSON.parse(localStorage.getItem(id))})
        } else {
            // call setComments() 
            this.setComments();
        }
      }

    setComments = () => {
        localStorage.setItem(this.props.postId, JSON.stringify(this.state.comments));
    }

    handleChange = event => {
        this.setState({
            inputText: event.target.value
        })
    }

    addNewComment = event => {
        event.preventDefault();
        this.setState({
            comments: [...this.state.comments,
            {text: this.state.inputText, 
                username: "Billy_Bob",
                removed: false}],
                inputText: ''
        })
        setTimeout(() => {
            this.setComments();
        }, 500) 
    }

    incrementLike = event => {
        this.setState({
            likes: this.state.likes +1
        })
    }

    removeComment = text => {
    this.setState({
        comments: this.state.comments.map(e => {
            
            if (e.text === text) {
                console.log("remove content e =", e.text)
                return {...e, removed: true}
            }
            else {
                return e;
            }
        })
    })

    }

    render() {
        // console.log("props.post.timestamp = ", typeof this.state.timestamp)
        return (
            <div>
                <div className='text-icons'>
                    <i onClick={this.incrementLike} class="far fa-heart"></i>
                    <i class="far fa-comment"></i>
                </div>
                <div className='likes' >
                    {`${this.state.likes} likes`}
                </div>

                {this.state.comments.map((c, i) => 
                <Comment 
                    key={i} 
                    comment={c} 
                    removeComment={this.removeComment}
                    removed={this.state.removed}
                />)}
                {/* <span>{moment(this.state.timestamp, 'MMMM Do YYYY HH:mm:ss a')}</span> */}
                {/* <span>{moment().fromNow()}</span> */}
                <CommentInput 
                    addNewComment={this.addNewComment} 
                    handleChange={this.handleChange}
                /> 
            </div>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, username: PropTypes.string})
    )
}

export default CommentSection;