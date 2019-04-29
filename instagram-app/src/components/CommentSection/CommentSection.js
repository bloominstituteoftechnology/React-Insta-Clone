import React from 'react'; 
import Comment from './Comment'; 
import AddNewComment from './AddNewComment'; 


// Setting CommentSection up as a Class because it will need to hold state
class CommentSection extends React.Component {
    constructor(props) {
        super(props); 
        this.state= {
            comments: props.comments
        }; 
    }

    render() {
        return (
            <div>

                <div className="existingComments">
                    {this.state.comments.map((comment) => 
                    <Comment comment={comment}/>
                    )}
                </div>
                
                <div className="newComment">
                    <AddNewComment /> 
                </div>

            </div>
        ); 
     }
 }

 export default CommentSection; 

