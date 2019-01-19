import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

const Comment = (props) => {
    return (
        <div>
                    <p>
                        <span className="comment_username">{this.props.username}</span>
                        <span className="comUser">{this.state.comment.username} </span>
                        <span>{this.state.comment.text}</span> 
                    </p>
        </div>
    )
}

export default Comment