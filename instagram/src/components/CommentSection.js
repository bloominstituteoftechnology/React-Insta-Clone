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

  

  addLike = () => {
    return this.props.obj.likes + 1
  }
  


  render() {
    return (
<div className="timestamp">

<div className='instaIcons'>
            <i id='icon' onClick={this.addLike()} className="far fa-heart"></i>
            <i id='icon' className="far fa-comment"></i>
            </div>

            <div className='instaFooter'>
           <p className='likes'>{`${this.props.obj.likes} likes`}</p>
            </div>

   { this.state.commentList.map(item => {
         return <Comment key={item.text} comment={item} />
    }) }

    <p>{this.props.obj.timestamp}</p>

    <form onSubmit={this.addComment}>

        <input className="commentsBar" 
        placeholder='Add a comment...'
        value={this.state.commentText}
        onChange={this.change}
        name="commentText"          />

        
    </form>

</div>)
}

}

export default CommentSection