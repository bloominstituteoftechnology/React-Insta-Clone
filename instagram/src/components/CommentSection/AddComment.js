import React from 'react';
import instaComment from './insta-comment.PNG';
import './CommentSection.css'

class AddComment extends React.Component {
    constructor(props) {
        super(props)
        this.state={
           
        }
    }

    render() {
        return(
            <div className="addComment">
                <div>
                  <strong>{this.props.comment.username} : </strong>{this.props.comment.text}
                </div>
                <div>
                    <img className="insta-comment" alt="instagram comment" src={instaComment} />
                </div>
    
            </div>
        )
    }

}
export default AddComment;