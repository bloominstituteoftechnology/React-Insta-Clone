import React from 'react';
import './comment-section.css';


class CommentSection extends React.Component {
constructor(props){
    super(props);
    this.state ={
        comments: props.comments,
        comment: ''
    }
}

handleChange = (event) => {
    this.setState({comment: event.target.value});
}

handleSubmit = (event) => {

    event.preventDefault();
    //calculate the id number of the next comment
    //by calculating the total amount of comments
    //already made in the post and adding 1

    let id = this.state.comments.length + 1;

    //set up the new commment to be added to our state
    //as an object
    let newComment ={id:parseInt(id),text: this.state.comment, username: "kevinsilvestre"};


    //get a copy of our current comments living in our states
    let currentComments = this.state.comments.slice();

    //push the new comment posted and merge it with the current state 
    currentComments.push(newComment);

    //using seState set the comments to new comments and empty the value of comment
    this.setState({ comments: currentComments, comment: ''});

    

  };






render(){
 
    return(
        
        <div className="comment-container">
         {this.state.comments.map(c => (
             <div className="each-comment" key ={c.id}>
                <p className="comment-username">{c.username}</p>
                <p className="comment-text">{c.text}</p>
             </div>
         ))}
         <section className="postForm">
                         <form onSubmit={this.handleSubmit}>
                             <textarea value={this.state.comment} onChange={this.handleChange}/>
                             <button>Post</button>
                         </form>
        </section>
        </div>
    )
}
}











export default CommentSection;