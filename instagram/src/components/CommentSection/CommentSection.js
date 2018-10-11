import React from 'react';


class CommentSection extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
            comments : props.comments,
            newComment: '',
        }

    }


    onCommentChange = e => {
            e.preventDefault();
            this.setState({newComment : e.target.value})
          }
        
    addNewComment = e => {
            e.preventDefault();
            this.setState({ comments: [...this.state.comments, {
                username: 'newUser',
                text: this.state.newComment}],
              newComment: '', });
            };
          

    render(){
       return(
        <div className='comment'>
         
             {this.state.comments.map((comment, index) => {
                return( 
                    <p> <strong>{comment.username}</strong> {comment.text}</p>
                )
                })}
            <form onSubmit={this.addNewComment}>
                <input
                type="text"
                name="newComment"
                value={this.state.newComment}
                onChange={this.onCommentChange}
                />
             </form>
        </div>

    )
            }
}

export default CommentSection;