import React, { Component } from 'react';
import "../../App.css"
import PropTypes from 'prop-types';

class Comment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dummyData: this.dummyData,
            counter: 0,
            asyncMessage: ''
        };

    }

    increment = event => {
        event.preventDefault();
        this.setState(prevState => ({ counter: prevState.counter + 1 }));
        console.log("counter: " + this.state.counter)
    };
    /* const Comment = props => { */
    render() {
        return (
            <div className="commentUser">
                <div className="user"> {this.props.user}</div> <div className="comment">{this.props.comments}
                </div>
                <a className='button' id='commentIcon' onClick={this.increment}></a>
                   {/*  <button className="btn" onClick={this.increment} /> */}
            </div>

        );
    };
}
    Comment.propTypes = {
        user: PropTypes.string.isRequired,
        comments: PropTypes.string.isRequired
    }

    export default Comment;