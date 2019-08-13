import React, { Component } from 'react';
import "../../App.css"
import PropTypes from 'prop-types';

class Comment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            };

    }
  

    increment = event => {
        event.preventDefault();
        this.setState(prevState => ({ counter: prevState.counter + 1 }));
    };

    render() {
       
        return (
           
           <div className="commentUser">
                <div className="user"> {this.props.user}</div>
                <div className="comment">{this.props.comments}
                </div>
                            
                <div className='button' id='commentIcon' onClick={this.increment}></div>
               
            </div>

        );
    };
}
Comment.propTypes = {
    user: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired
}

export default Comment;