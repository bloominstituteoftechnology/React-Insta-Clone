import React from 'react';
import ReactDOM from 'react-dom';
import PostContainer from './../PostContainer/PostContainer';
import PropTypes from 'prop-types';

class CommentSection extends React.Component{
  constructor(props){
    super();

 this.state = {
   comment:'',
   comments:props.comm
  }
  this.onFormSubmit = (e) =>  {
    e.preventDefault();
    // let newinfo = {, username: this.state.comment.username, text: this.state.comment};
    this.setState({
      comments:[
        ... this.state.comments,
        { username: 'Lambda', text: this.state.comment}
      ],
      comment: ''
    });
    e.target.reset();
    console.log (this.state.comment);
  }
}
render() {
  return (
   
    <div>
      {this.state.comments.map( (e) => {
        return( <div key={`${e.username}${e.text}`}><div>{e.username}</div>
          <div>{e.text}</div></div>
          )
          
      })}
     
         <div className="commentForm">
         <form onSubmit={this.onFormSubmit}>
         <input id="" type="text" placeholder="Add a comment" style = {{border: 'none'}} onChange={e=>this.setState({comment: e.target.value})} />
         </form>
         
      </div>
    </div>
   
  )
}

  }
   
CommentSection.propTypes = {
  comm: PropTypes.arrayOf(PropTypes.shape(
    {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired    
    }
  ))
  }

export default CommentSection;
