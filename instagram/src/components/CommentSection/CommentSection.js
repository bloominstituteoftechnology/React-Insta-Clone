import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentSection extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    componentsDidMount() {

    }

    render() {
        return (
            <div></div>
        );
    }
}

CommentSection.propTypes = {
    thing: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
    }))
}

export default CommentSection;

// {
//     username: "philzcoffee",
//     text: "We've got more than just delicious coffees to offer at our shops!"
// },