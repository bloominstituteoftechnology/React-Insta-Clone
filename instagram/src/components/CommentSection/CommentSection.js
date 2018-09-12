import React, { Component } from 'react';
import PropTypes from 'prop-types'

class CommentSection extends Component {
    constructor(props){
        super(props);
        this.state={
            comments: props.comments,
            commentInput: ''
        }
        console.log(this.state.comments)
    }



    render() { 
       
        return (  

            <div>hello</div>

        );
    }
}
 
export default CommentSection;