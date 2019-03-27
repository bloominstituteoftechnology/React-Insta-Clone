import React from "react";
import Comment from "./Comment";
// import Data from "../dummy-data"
import "../App.css";
class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            comments:props.comment,
            comment:""
        }
        console.log(props.comment)
    }
    handlechange = e =>{
        this.setState( {[ e.target.name]: e.target.value})

    }
    addcomment = e =>{
        e.preventDefault();
        const newComment ={
            id: Date.now(),
            username: "Antonio",
            text: this.state.comment,
            
           

        }
        
        // console.log(newComment)
        // const comments = this.state.Comments.slice();
        // comments.push(newComment)

        this.setState({
            comments: [...this.state.comments, newComment],
            comment:''
        })

    }
     

    


    render (){  
        // console.log(this.state.Comments)
        return (
        <div>
          <div className="comment-section">
            <div className=" comment-wrapper">
              {this.state.comments.map((comment, i) => (
                <Comment username={comment.username} key={i} text={comment.text} />
              ))}
            </div>
            <div className="input-wrapper">
              <div className="input-field">
              <form onSubmit ={this.addcomment} >
                <input
                onChange={this.handlechange}
                value ={this.state.comment}
                  className="comment-input"
                  type="text"
                  name = "comment"
                  placeholder="Add Comment.."
                />
                </form>
              </div>
              <div>
                {" "}
                <button>
                  <i class="fas fa-ellipsis-h" />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
       }

};
export default CommentSection;
