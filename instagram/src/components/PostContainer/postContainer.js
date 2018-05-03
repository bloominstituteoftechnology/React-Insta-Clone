import React, { Component } from 'react';

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        };
    }

    render() {
        return (
            <div>
                {this.state}
            </div>
        );
    }

}

export default PostContainer;