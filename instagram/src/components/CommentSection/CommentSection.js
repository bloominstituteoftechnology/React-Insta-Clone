import React, {Component} from 'react';
import './CommentSection.css';

// The CommentSection component will receive the array of comments as props and render each one with the username of the poster as well as the post's text. Additionally, there should be an input box that allows users to submit a new comment for any post. Since there is no login page or anything of that sort, hard code a static username.

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
          comments: [],
          // username: '', 
          // text: ''
        }

        }

    componentDidMount () {
      this.setState({
        comments: this.props.comments
      });
    }

        render() {
          return (
            <div className="commentWrapper">
              {this.props.comments.map((comment, index) => {
                return (
                  <div key={index}>
                    <p className="userComment"><strong>{comment.username} </strong> {comment.text} </p>
                  </div>
                 
                  )
              })}

            </div>
          )
        }
  }




export default CommentSection;