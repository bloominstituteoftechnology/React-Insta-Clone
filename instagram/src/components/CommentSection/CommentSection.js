import React, { Component } from 'react';


class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      commentSubmitted: '',
    };
  };

  // addComment() {
  //   event.preventDefault();
  //   const newComment = this.state.commentSubmitted;
  //   commentSubmitted = event.target.value;
  //   comment.push(this.state.commentSubmitted)
  //   commentSubmitted = '';
  // }


  render() {
    return (
      <div>
        {this.state.comments.map(comment => {
          return (
            <div>

              <h4>{comment.username}</h4>
              <p>{comment.text}</p>

            </div>

          )
        })}

        <form onSubmit={this.addComment}>
          <input
            type="text"
          // onChange={this.handleListInput}
          // placeholder="Add a new item"
          // value={this.state.newItem.text}
          />
        </form>
      </div>
    );
  }
}

export default CommentSection;