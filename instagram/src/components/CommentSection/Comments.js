import React from 'react';
import './CommentSection.css'; 
import PropTypes from 'prop-types'; 



class Comments extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }


    render () {

        return (
            <div className ="comments">
                
              <div className = "comment">
                <h3 className= "userCommentName" onDoubleClick={this.props.onDoubleClick}>{this.props.userName}</h3>
                <p align= "left" className = "userCommentText">{this.props.text}</p>
              </div>
            </div> 
        ); 
    }
}


Comments.propTypes = {
    userName: PropTypes.string,
    text: PropTypes.string,
    time: PropTypes.string,
    onDoubleClick: PropTypes.func
}

export default Comments 