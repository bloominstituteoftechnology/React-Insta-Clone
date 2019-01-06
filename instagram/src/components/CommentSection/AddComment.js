import React from 'react';
import instaComment from './insta-comment.png';
import './CommentSection.css'

class AddComment extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            newComment: ""
        }
    }

    handleChange(event) {
        console.log("working?")
        const {name, value} = event.target
        this.setState({ [name]: value})
    }

    render() {
        return(
            <div className="addComment">
                <div>
                  <strong>{this.props.comment.username}</strong>
                  {this.props.comment.text}
                </div>
                <div>
                    <img className="insta-comment" alt="instagram comment" src={instaComment} />
                </div>
    
            </div>
        )
    }

}
export default AddComment;