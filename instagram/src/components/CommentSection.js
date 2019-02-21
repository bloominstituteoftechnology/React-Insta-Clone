import React from 'react';
import Comment from './Comment'
import moment from 'moment'
import Likes from './Likes'

class CommentSection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        commentList: props.commentList,
        commentText: "", 
        likes: props.obj.likes
        
      };
    }
  

addComment = e => {
    e.preventDefault();
    console.log(e.target)
  
    const newComment = {
      username: 'UserName',
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

  

//   addLike = () => {
//     this.setState({
//         likes: this.state.likes +1
//     })
//   }
  


  render() {
    return (
<div className="timestamp">

    <Likes likes={this.state.likes} />

           { this.state.commentList.map(item => {
             return <Comment key={item.text} comment={item} />
            }) }

      <p>{moment(this.props.obj.timestamp, 'MMMM Do YYYY, LTS').format('M/e/gg')}</p>
         {/* {moment(this.props.timestamp, ‘MMMM Do YYYY, LTS’).format(‘dddd’)} */}

    <form onSubmit={this.addComment}>

        <input className="commentsBar" 
        placeholder='Add a comment...'
        value={this.state.commentText}
        onChange={this.change}
        name="commentText"          />

        
    </form>

</div>
)
}

}

export default CommentSection