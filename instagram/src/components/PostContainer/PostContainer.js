import React, { Component } from 'react';
import CommentSection from './CommentSection';

class PostContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="post-container">
                <div className="thumbnail">
                    <img src={this.props.postData.thumbnailUrl} />
                    <span>{this.props.postData.username}</span>
                </div>
                <div className="image">
                    <img src={this.props.postData.imageUrl} />
                </div>
                <CommentSection comments={this.props.postData.comments} /> 
            </div>
        );
    }
}

export default PostContainer;




// import React from 'react';
// import react from 'ReactSixteenAdapter'

// class Comments extends React.Component {


//   constructor(props, context) {
//     super(props, context);

//   }

//   renderComment(comment, index) {
//     const { postId } = this.props.params;
//     return (
//       <div className="comment" key={index}>
//         <p>
//           <strong>{comment.user}</strong>
//           {comment.text}
//           <button className="remove-comment" onClick={this.props.removeComment.bind(null, postId, index)}>&times;</button>
//         </p>
//       </div>
//     )
//   }

//   handleSubmit(evt) {
//     evt.preventDefault();
//     const { postId } = this.props.params;
//     const author = this.refs.author.value;
//     const comment = this.refs.comment.value;
//     this.props.addComment(postId, author, comment);
//     this.refs.commentForm.reset();
//   }

//   render() {
//     return(
//       <div className="comments">
//         {this.props.postComments.map(this.renderComment.bind(this))}
//         <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
//           <input type="text" ref="author" placeholder="author"/>
//           <input type="text" ref="comment" placeholder="comment"/>
//           <input type="submit" hidden/>
//         </form>
//       </div>

//     )
//   }
// }

// export default Comments;
