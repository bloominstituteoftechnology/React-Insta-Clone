import React, {Component}from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment'
import ActionHeader from './ActionHeader'

class CommentSection extends Component {
    constructor(props){
        super(props);
        this.state ={
            commentList: props.comments,
            comment: '',
            username: props.username
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
               username: this.state.username,
               text: this.state.comment
           }],
           text: ''
        })
        window.localStorage.setItem('comments', JSON.stringify(this.state.commentList));
        this.setState({comment: ''})
        ev.target.firstChild.value="";
        console.log(window.localStorage.getItem('comments'))
    };

    render(){
        
    return (
      <div className="comment-section" >
          <ActionHeader likes={this.props.likes}/>
          {/* <p className="font-weight-bold">{this.props.likes} likes</p> */}
          
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
