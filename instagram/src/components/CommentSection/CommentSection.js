import React, { Component } from 'react';
import './CommentSection.css';

/*const CommentSection = props =>{
    const commentList = props.comments.map(comment =>{
      return <li>


              <strong>{comment.username}</strong> <p>{comment.text}</p>



             </li>
    });


  return(<ul>{commentList}</ul>);
}*/
let newComment;
let count = 0;

class CommentSection extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentComment: "",
      comments: [...props.comments],
      count:count,
      thisUserClicked: false
    }
  }

  getNewComment = (event, index)=>{
    newComment = event.target.value;
    console.log(newComment)
    console.log(this.state.comments)
    this.setState(prevState => ({currentComment: newComment}))

    /*this.setState(prevState=>({
      comments: [...prevState.comments, event.target.value]
    }))*/
  }
  addNewComment = (e)=>{

    e.preventDefault();
    console.log('new comment is ' + newComment)
    this.setState(prevState =>({
      comments: [{username: 'User', text: newComment},...prevState.comments]
    }), ()=>{this.setState(prevState =>({currentComment: ""}))})
    //newComment = ""
  }

  addLike = (e) =>{
    if(!this.state.thisUserClicked){
    count+=1;
    this.setState(prevState => ({count: count, thisUserClicked: true}));}
    else{
      count -=1;
      this.setState(prevState =>({count: count, thisUserClicked: false}))
    }

  }

  componentWillReceiveProps(nextProps){
    this.setState(nextProps)
  }

  render(){
    console.log(this.state.comments)
    return(

      <div className = "comment-section">
      <div className = "post-reactions"><i  onClick = {()=>{this.addLike()}} className="heart-size fa">&#xf08a;<span>{this.state.count}</span></i></div>

        <ul>

        {this.state.comments.map(comment =>{
          return <li>


                  <strong>{comment.username}</strong> <p>{comment.text}</p>



                 </li>})}
        </ul>
        <form onSubmit = {this.addNewComment}>
          <input onChange = {this.getNewComment} type = "text" name = "comment" value = {this.state.currentComment} />
          <input type = "submit" value = "Submit " />
        </form>
      </div>
    );
  };
}

export default CommentSection;
