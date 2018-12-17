import React from 'react';

class Likes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            likes: props.likes,
        }
    }

    likeHandler = event => {
        event.preventDefault();
        this.props.increaseLikes();
    }

    render() {
        return(
            <div>
                <i onClick={this.likeHandler} className="fa fa-heart-o"></i>
                <i className="fa fa-comment-o"></i>
            </div>
        )
    }
}

export default Likes;