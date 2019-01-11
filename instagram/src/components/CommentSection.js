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
                <Comment />
        )
    }
}

/*CommentSection.propTypes = {
    comment: PropTypes.objectOf(PropTypes.string).isRequired,
  }*/

export default CommentSection