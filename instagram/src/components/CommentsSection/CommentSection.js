import React, { Component } from 'react';
import '../../App.css';
import Comment from './Comment.js'
import CommentInput from './CommentInput'
/*import PropTypes from 'prop-types';*/

class CommentSection extends Component {
    constructor (props) {
        super (props)
        this.state = {
            comments: props.comments,
            comment: '',
        }
}

componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
        this.setState({
            comments: JSON.parse(localStorage.getItem(this.props.postId))
        })
    } else {
        this.setComments();
    }
}

componentWillUnmount() {
    this.setComments();
}

setComments = () => {
    localStorage.setItem(
        this.props.postId,
        JSON.stringify(this.state.comments)
    )
}

commentHandler = ev => {
    this.setState({ comment: ev.target.value })
}

handleCommentSubmit = ev => {
    ev.preventDefault();
    const  newComment = { text: this.state.comment, username: 'pauldeyonghe' }
    console.log(this.state)
    const comments = this.state.comments.slice()
    comments.push(newComment)
    this.setState({ comments, comment: '' })
    setTimeout(() => {
        this.setComments()
    }, 500 )
}


    render(){
        return(
            <div>
                {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}        
                <CommentInput
                    comment={this.state.comment}
                    submitComment={this.handleCommentSubmit}
                    changeComment={this.commentHandler}
                />
            </div>
        )
    }
}

/*CommentSection.propTypes = {
    comment: PropTypes.objectOf(PropTypes.string).isRequired,
  }*/

export default CommentSection;