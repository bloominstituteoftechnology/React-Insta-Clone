import React, {Component} from 'react';
import dots from '../../images/dots.svg'
import '../CommentSection/CommentSection.css'

class CommentSection extends Component {
    constructor (props) {
        super(props);
        this.state = {
            comments: this.state.comments,
            newComment: '',
            timeStamp: props.timeStamp,
        }
    }

    // addNewComment = event => {
    //     event.preventDefault();
    //     if (this.state.newComment.length > 0) {
    //         this.setState ({
    //             comments: [...this.state.comments, {
    //                 username: 'username',
    //                 text: this.state.newComment,
    //             }],
    //             newComment: '',
    //         })
    //     }
    // }

    // handleChange = event => {
    //     this.setState ({
    //         [event.target.name]: event.target.value,
    //     })
    // }
    render() {
    return (
        <div className ='addComment'>
            <form action = 'submit'>
                <input type = 'text' placeholder = 'Add a comment...' /> 
            </form>
            <img src={dots} alt = 'options for commenting' />
         </div>
    )
}
}
 export default CommentSection;