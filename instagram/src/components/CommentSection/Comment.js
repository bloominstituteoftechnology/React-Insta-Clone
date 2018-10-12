import React, { Component } from 'react';
import "../../App.css"
import PropTypes from 'prop-types';

class Comment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dummyData: this.dummyData,
            counter: 0,
            display: false
        };

    }
    menu = event => {
        event.preventDefault();
        if (this.state.display) {
            this.setState({ display: false })
        } else { this.setState({ display: true }) }
    }

    increment = event => {
        event.preventDefault();
        this.setState(prevState => ({ counter: prevState.counter + 1 }));
        console.log("counter: " + this.state.counter)
    };

    render() {
        var classNames = require('classnames');

        var btnClass = classNames({
            menu: true,
            'visible': this.state.display
        })
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