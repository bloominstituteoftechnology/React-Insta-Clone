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
    }

    incrementLike = event => {
        this.setState({
            likes: this.state.likes +1
        })
    }

    removeComment = text => {
        // console.log('clicked removeComment method', this.state.comments)
        // this.setState({
        //     comments: this.state.comments.filter(
        //       e => e.removed === true)
        //   })

    //     this.setState({
    //         comments: this.state.comments.map(e => {
    //             if (e.timestamp === e) {
    //                 return {...e,
    //                 removed: e.removed === true ? false : true}
    //             }
    //         else {
    //             return e
    //         }
    //     })
    // })
    // console.log("TEXT = ", text)
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

    // changeComplete = id => {
    //     this.setState({
    //       data: this.state.data.map(singleChar => {
    //         if (singleChar.id === id) {
    //           console.log('single char', singleChar.completed)
    //           return {...singleChar, 
    //             completed: singleChar.completed=== true ? false :
    //             true};
    //         } else {
    //           return singleChar;
    //         }
    //       })
    //     })
    //   }
    

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