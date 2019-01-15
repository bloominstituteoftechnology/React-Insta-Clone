import React, {Component}from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment'

class CommentSection extends Component {
    constructor(props){
        super(props);
        this.state ={
            commentList: props.comments,
            comment: '',
        }
        console.log(this.state.commentList);
    }
    handleChanges = ev => {
        this.setState({ [ev.target.name]: ev.target.value });  
    }
    
    submitComment = (ev) =>{
        ev.preventDefault();
        this.setState({
           commentList: [...this.state.commentList, {
               username: "mattbasile2",
               text: this.state.comment
           }],
           text: ''
        })
        this.state.comment = '';
        ev.target.firstChild.value="";
    };

    render(){
    return (
      <div className="comment-section" >
          <div className="d-flex action-btns">
              <i className="far fa-heart"/>
              <i className="far fa-comment"/>
          </div>
          <p className="font-weight-bold">{this.props.likes} likes</p>
          
          {this.state.commentList.map((comment, i) => {
          return <Comment key={i} username={comment.username} text={comment.text} />}
          )}
        
          <p className="time-stamp">{this.props.timeStamp}</p>

          <form 
          onSubmit={this.submitComment}
          className="add-comment d-flex">
            <input 
            onChange={this.handleChanges}
            onSubmit={this.submitComment}
            name="comment"
            placeholder="Add a comment..."/>
            <i className="fas fa-ellipsis-h"/>
        </form>
          
      </div>
    )
    }
}


CommentSection.propTypes={
    comments: PropTypes.arrayOf(PropTypes.shape({
                username: PropTypes.string,
                text: PropTypes.string
    })),
    timeStamp: PropTypes.string,
    likes: PropTypes.number,
}


export default CommentSection;
