import React from 'react';
import PropTypes from 'prop-types';


class Comments extends React.Component {
    constructor(props) {
        super();
        this.state= {
            comments: props.values.text,
            username: props.values.username
        }
    }
    render() {
        return(
        <div className="posted">
            <div className="user">{this.state.username}</div>
            <div><p>{this.state.comments}</p></div>
        </div> 
        )
    }
}

Comments.PropTypes = {
    comments: PropTypes.string,
    username: PropTypes.string
}

export default Comments;