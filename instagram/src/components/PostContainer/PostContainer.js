
import React, { Component } from 'react';
import Post from './Post';
import dummyData from '../../dummy-data';



{/*import React, { Component } from "react";
import dummyData from '../../dummy-data';

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            postData: []
        };
    }

    componentDidMount () {
        this.setState({postData: dummyData});
    }

    render () {
        return (
        <div>
        <h1>{this.state.name}</h1>;
        {this.state.postData.map((post, index) => <div key={index}>{post.username}</div>)}
        </div>
        );
     }
    } 
 

export default PostContainer;

import React, { Component } from 'react';
import Post from './Post';
import dummyData from '../../dummy-data'; */}

class PostContainer extends Component {
  state = {
    postData: []
  };

  componentDidMount() {
    this.setState({ postData: dummyData });
  }

  render() {
    const { postData } = this.state;
    return <div>{postData.map(post => <Post post={post} />)}</div>;
  }
}

export default PostContainer;