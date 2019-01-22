import React from 'react';
import Comments from './Comments';


class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: "",
      comments: props.comments
    }
  }

  addComment = event => {
    event.preventDefault();
    console.log(this.state.comments)

    const theUser = "Bob"

    const newComment = {username: theUser , text: this.state.comment}
  
    const commentsArray = this.state.comments.slice();

    commentsArray.push(newComment);

    this.setState({
      comments: commentsArray, comment: ""

    })


  }

  changeIt = event => {
    this.setState({
      comment: event.target.value
    });
  };
 
  render() {
  return (
    <div>
      <div>
        {this.state.comments.map((comment, index) => (
          <Comments key={index}
          comment={comment}
          />
        ))
         
        } 
      </div>

      <div className="comment">
        <form className='addcomment' onSubmit={this.addComment}>
            <input
            type="text"
            name="text"
            placeholder="Add New Comment"
            value={this.state.comment}
            
            onChange={this.changeIt}
            
            />
        </form>
      </div> 

    </div>
        
    );

  }
  
      }  
 
export default CommentSection;