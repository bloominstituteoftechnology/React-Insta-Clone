import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    // componentDidMount() {
    //     this.setState = {
    //         commentsArray: this.props.thing
    //     }
    // }

    render() {
        return (
            <div>
                {this.props.thing.map(obj => {
                    return (
                        <div>
                            <p>username: {obj.username}</p>
                            <p>text: {obj.text}</p>
                        </div>
                    );
                })}
            </div>
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