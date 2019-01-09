import React from 'react';
import ReactDOM from 'react-dom';
import PostContainer from './../PostContainer/PostContainer'
import PropTypes from 'prop-types';

class CommentSection extends React.Component{
  constructor(props){
    super();
 this.state = {comment:''}
 this.onFormSubmit = (e) =>  {
  e.preventDefault();
  this.setState.value
  //some action to render comment to screen ???????????
}
  }
render() {
  return (
   
    <div >
      {this.props.comm.map( comm => {
        return( <div key={`${comm.username}${comm.text}`}><div>{comm.username}</div>
          <div>{comm.text}</div></div>
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
