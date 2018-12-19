import React from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentUser: ""
    }
  }

  componentDidMount() {
    this.buildUsers(dummyData);
    this.setCurrentUser();
  }

  buildUsers = (data) => {
    this.setState({users: data});
  }

  setCurrentUser() {
    const user = localStorage.getItem('currentUser');
    this.setState({currentUser: user});
  }

  updateUsers = (users) => {
    this.setState({users: users});
  }

  render() {
    return (
      <div className="App">
        <SearchBar users={this.state.users} update={this.updateUsers} user={this.state.currentUser}/>  
        <PostContainer users={this.state.users} />      
      </div>
    );
  }

}

export default PostsPage;
