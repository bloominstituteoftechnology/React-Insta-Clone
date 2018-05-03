import React, { Component } from 'react';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        console.log("here ",this.props);
        return (
          <div>
              {this.props.post.username}
          </div>
        );
      };
    }

export default Post;