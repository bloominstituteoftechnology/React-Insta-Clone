import React from 'react';
import ReactDOM from 'react-dom';
import PostContainer from './../PostContainer/PostContainer'
import PropTypes from 'prop-types';

class CommentSection extends React.Component{
  constructor(props){
    super();
<<<<<<< HEAD
 this.state = {
   comment:'',
   comments:props.comm
  }
  this.onFormSubmit = (e) =>  {
    e.preventDefault();
    let newinfo = {... this.state.comments, username: this.state.comment.username, text: this.state.comment};
    this.setState.comment = {username: this.newinfo.username, text: this.newninfo.text}
    console.log (newinfo);
  
=======
 this.state = {comment:''}
 this.onFormSubmit = (e) =>  {
  e.preventDefault();
  // this.setState.value
>>>>>>> 2cfa852af673265e1d824cba5c2b7a0bf182fbe7
  //some action to render comment to screen ???????????
}
  }
render() {
  return (
   
    <div>
      {this.state.comment.map( (e) => {
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
   
  );
}
  }
 
CommentSection.propTypes = {
  comm: PropTypes.arrayOf(PropTypes.shape(
    {
    username: PropTypes.string,
    text: PropTypes.string    
    }
  ))
  }
export default CommentSection;
