import React, { Component } from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends Component {
    constructor(props){
        super(props)
        this.state ={
            comments : props.comments,
            comment: ""
        }
    }

    componentDidMount() {

    }


    changeComment = event => this.setState({comment : event.target.value})

    render() {

        return (
            <div>
              {this.state.comments.map((comment,index) => <Comment  comment ={comment} key ={index}/>)}
              <CommentInput
              changeComment ={this.commentChange}
               />
            </div>
        );
    }
}

export default CommentSection;