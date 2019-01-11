import React, { Component } from 'react';
import '../App.css';
import Comment from './Comment.js'
import PropTypes from 'prop-types';

class CommentSection extends Component {
    constructor (props) {
        super (props)
        this.state = {
            comment: props.comment
        }
}


    addNewComment = (event, indNumber) => {
        return(this.setState({event: this.event,
                                indNumber: this.indNumber  }))
    }

    render = () => {
        console.log("Check: ", this.props )
            return (
<<<<<<< HEAD
                <Comment />
=======
                <div>
                    <p>
                        <span className="comment_username">{this.props.username}</span>
                        <span className="comUser">{this.state.comment.username} </span>
                        <span>{this.state.comment.text}</span> 
                    </p>
        </div>
>>>>>>> 32fad02b8667cc49a861f3f1271c137e77a4cb9c
        )
    }
}

/*CommentSection.propTypes = {
    comment: PropTypes.objectOf(PropTypes.string).isRequired,
  }*/

export default CommentSection