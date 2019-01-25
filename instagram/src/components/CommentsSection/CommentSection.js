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
            comments: JSON.parse(localStorage.getItem(this.props.id))
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


    addNewComment = (event, indNumber) => {
        return(this.setState({event: this.event,
                                            indNumber: this.indNumber  }))
    }

    render(){
        return(        
                <Comment />
        )
    }
}

/*CommentSection.propTypes = {
    comment: PropTypes.objectOf(PropTypes.string).isRequired,
  }*/

export default CommentSection;