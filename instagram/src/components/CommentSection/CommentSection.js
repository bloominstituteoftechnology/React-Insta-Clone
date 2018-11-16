import React, {Component} from 'react';
import "./CommentSection.css"
import Comments from './Comments'



class CommentSection extends Component {
    constructor(props){
        super();
        this.state = {
          comments: props.comments,
          commentInput:"",
          user:"Dan"
        }
      }

    addNewComment = event => {
    if(event.key === 'Enter'){
        event.preventDefault();
        console.log("add")
        this.setState({
            comments: [
                ...this.state.comments,
                {username:this.state.user,text:this.state.commentInput}
            ],
            commentInput: ""
            })
      }
    };

    handleChange = event => {
        event.preventDefault();
        console.log("change")
        this.setState({
            commentInput: event.target.value
            })
    }


      render() {
        return(
            <div className="comment-section">
                {
                this.state.comments.map((e,index) => (
                    <div key={index}>
                        <Comments  username={e.username} text={e.text}/>
                    </div>
                ))
                }
    
                <form action="">
                    <input
                        className="comment-input" 
                        type="text" placeholder="Add comment" 
                        onChange={this.handleChange}
                        onKeyPress={this.addNewComment}
                        value={this.state.commentInput}
                    >
                    </input>
                </form>
            </div>
        );
      }
    

}

export default CommentSection;