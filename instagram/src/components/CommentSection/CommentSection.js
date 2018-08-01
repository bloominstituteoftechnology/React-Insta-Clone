import React from 'react';
import './CommentSection.css';
import Comment from './Comment';
import PropTypes from "prop-types";

class CommentSection extends React.Component{
    constructor(props){
        super(props);
        this.state={
            comments: props.comments,
            input: '',
            likes: props.likes
        }
    }
    addNewComment = (e,i) => {
        e.preventDefault();
        let comments = this.state.comments.slice(i);
        comments.push({username: 'FakeAcct', text: this.state.input});
        this.setState({comments, input:''})
    }
    incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({likes});
    }
    handleNewComment = e => {
        this.setState({input: e.target.value});
    }
    render(){
        return(
            <div>
                <div>
                    <i onClick={this.incrementLike} className="fa fa-heart-o like-comment" aria-hidden="true"></i>
                    <i className="fa fa-comment-o like-comment" aria-hidden="true"></i>
                </div>
                <div className='likes'>{this.state.likes} likes</div>
                <div>
                    {this.state.comments.map((comment, i) => {
                        return (
                            <div key={i}>
                                <Comment comment={comment} /> 
                            </div>
                        )})}
                </div>
                <div>{this.props.timestamp}</div>
                <form className='footer' onSubmit={this.addNewComment}>
                    <input onChange={this.handleNewComment}
                           className='add-comment' placeholder="Add a comment...">
                    </input>
                    <i className="fa fa-ellipsis-h"></i>
                </form>
            </div>
        );  
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({
          text: PropTypes.string,
          username: PropTypes.string
        })
    )
  };

export default CommentSection;