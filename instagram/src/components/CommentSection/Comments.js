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
            <div>
              <div className = "comment">
                <h3 className className= "userCommentName">{this.props.userName}</h3>
                <p className = "userCommentText">{this.props.text}</p>
              </div>
              <h4>{this.props.time}</h4>
            </div> 
        ); 
    }
}

// AverngersList.proopTypes = {
//     avengers: PropTypes.arrayOf(PropTypes.string)
// }

Comments.propTypes = {
    userName: PropTypes.string,
    text: PropTypes.string,
    time: PropTypes.string
}

export default Comments 