import React from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import ShowPost from './ShowPost';
import SearchResult from './SearchResult';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from "react-router";

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentUser: "",
      searchResult: []
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

  setSearchResult = (users) => {
    this.setState({searchResult: users});
    this.props.history.push("/search-result");
  }

  getUser = (id) => {
    return this.state.users.filter(user => user.timestamp === id)[0];
  }

  render() {
    return (
      <div className="App">
        <SearchBar users={this.state.users} update={this.setSearchResult} user={this.state.currentUser}/>  
        <Switch>
          <Route path="/" exact render={() => <PostContainer users={this.state.users} /> } />
          <Route path={"/search-result"} render={ () => <SearchResult users={this.state.searchResult}/> } />
          <Route path={"/:id"} render={ () => <ShowPost getUser={this.getUser}/> } />
        </Switch>
      </div>
    );
  }

}

export default withRouter(PostsPage);
