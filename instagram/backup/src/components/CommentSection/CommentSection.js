import React, { Component } from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';


/*
Passed as props from Post.js

postKey = {this.props.key} 
comments = {this.props.post.comments}

*/


class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ""
        }
    }

    componentDidMount() {
        const id = this.props.postKey;
        if (localStorage.getItem(id)) {
          this.setState({
            comments: JSON.parse(localStorage.getItem(this.props.postKey))
          });
        } else {
          this.setComments();
        }
      }



    componenetWillUnmount() {
        this.setComments();
      }



    setComments = () => {
        localStorage.setItem(
          this.props.postKey,
          JSON.stringify(this.state.comments)
        );
      };


    handleChange = (e) => {
        this.setState( {comment: e.target.value} )
    }

    handleAddComment = (e) => {
        e.preventDefault();

        const comments = this.state.comments.slice();
        const newComment =  { username: "testName", text: this.state.comment };
        comments.push(newComment);

        this.setState( { comments, comment: ""} );

         setTimeout( () => {
           this.setComments();
         }, 500);
     };

    render() {

        return (
            <div>
                {this.state.comments.map( (c, i) => <Comment key={i} user={c.username} text={c.text} /> )}

                <CommentInput 
                    handleChange = {this.handleChange}
                    handleAddComment = {this.handleAddComment}
                    comment = {this.state.comment}
                />
            </div>
        )
    }
}

export default CommentSection