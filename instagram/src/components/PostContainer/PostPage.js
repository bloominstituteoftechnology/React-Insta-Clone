import React from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      dummyData: []
     }
  }

  componentDidMount() {
    this.setState({
      dummyData: dummyData
    })
  }

  render() { 
    return ( 
      <div className="PostPage">
        <PostContainer posts={this.state.dummyData} />
      </div>
    );
  }
}
 
export default PostPage;