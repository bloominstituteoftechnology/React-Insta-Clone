import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment'
import CommentInput from './CommentInput';


class CommentSection extends Component {
    constructor(props){
        super(props)
        this.state = {
            comments : props.comments,
            comment : ''
        }

    }

    componentDidMount() {
        const id = this.props.postId
        if(localStorage.getItem(id)){
            this.setState({comments : JSON.parse(localStorage.getItem(id))})
        }else {
            this.saveComment()
        }
    }


    saveComment = () => {
        localStorage.setItem(this.props.postId,JSON.stringify(this.state.comments))
    }

    submitComment = event =>{
        event.preventDefault()
        let newComment = {username : "Sanusi", text : this.state.comment }
        let comments = [...this.state.comments]
        comments.push(newComment)
        this.setState({comments, comment : ''})
        setTimeout(() => {
            this.saveComment()
        } , 500)
        console.log(this.props.postId)
    }

    changeComment = event => {
        this.setState({comment : event.target.value })
    }
    render() {
        return (
            <div>
              {this.state.comments.map((comment , index) => <Comment  key={index} comment ={comment}/>)}
              <CommentInput
                comment = {this.state.comment}
                changeComment = {this.changeComment}
                handleCommentSubmit ={this.submitComment}
              />

            </div>
        );
    }
}

CommentSection.propTypes = {

};

export default CommentSection;