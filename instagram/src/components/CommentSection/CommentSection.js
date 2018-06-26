import React from "react";

// const CommentSection = props => {
//   return (
//     <div className="comment-text">
//       <p className="comment">{props.comments.map((instance, i) => <li key={i}><strong>{instance.username} </strong>{instance.text}</li>)}</p>
//     </div>
//   );
// };
class CommentSection extends React.Component {
  constructor(props){
    super();
    this.state = {
      props: props
    };
  this.addComment = () => {
  console.log(document.querySelector(".comment-form").value);
  }
}
  render(){
    return(
    <div className="comment-text">
      {this.state.props.comments.map((instance, i) => <p key={i}><strong>{instance.username} </strong>{instance.text}</p>)}
      <input type="text" className="form-control comment-form" onClick={this.addComment} placeholder="Add a comment..."></input>
    </div>
  )
  }
}



export default CommentSection;
