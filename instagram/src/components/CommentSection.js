import React from 'react';
import Comment from './Comment'

class CommentSection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        commentList: props.commentList,
        commentText: "", 

        
      };
    }
  

addComment = e => {
    e.preventDefault();
    console.log(e.target)
  
    const newComment = {
      username: 'sdgdfg',
      text: this.state.commentText 
    }
    this.setState({
      commentList: [...this.state.commentList, newComment], 
      commentText: "",
    })
  }
  
  change = e => {
    
    this.setState({
      [e.target.name] : e.target.value,
    })
  }


  
  render() {
    return (
<div className="timestamp">

   { this.state.commentList.map(item => {
         return <Comment key={item.text} comment={item} />
    }) }


    <form onSubmit={this.addComment}>

        <input className="commentsBar" 
        placeholder='Add a comment...'
        value={this.state.commentText}
        onChange={this.change}
        name="commentText"          />

        <p>{this.props.obj.timestamp}</p>
    </form>

</div>)
}

}

export default CommentSection