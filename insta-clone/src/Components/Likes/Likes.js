import React, { Component } from 'react';

class Likes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.likes
        }
    }

    addToLikes = () => {
        let likesCount = this.state.likes;
        likesCount += 1;
        this.setState({ likes: likesCount })
    }

    resetLikes = () => {
        this.setState({ likes: this.props.likes })
    }

    render() {
        return (
            <div>
                <div>{`here are likes: ${this.state.likes}`}</div>
                <button onClick={this.addToLikes}>Like</button>
                <button onClick={this.resetLikes}>reset likes</button>
            </div>
        )
    }
}

export default Likes;