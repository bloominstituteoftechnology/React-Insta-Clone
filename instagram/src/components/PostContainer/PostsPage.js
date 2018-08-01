import React from 'react';
import SearchBarContainer from '../SearchBar/SearchBarContainer';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    this.setState({users: dummyData});
  }
  render() {
    return (
      <div>
        <SearchBarContainer />
        <div className="container">
          {this.state.users.map(user => <PostContainer key={user.username} user={user}/>)}
        </div>
      </div>
    );
  }
}

export default PostsPage;
