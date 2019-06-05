import React from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import Login from './components/Login/Login';
import withAuthenticate from './components/Authentication/withAuthenticate';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filterNames: []
    };
  }

  handleSearch = search => {
    console.log(search);
    const name = this.state.data.filter(user => {
      return user.username.toLowerCase().includes(search.toLowerCase());
    });
    console.log(name);

    this.setState({
      filterNames: name
    });
  };

  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }
  render() {
    const renderedData = this.state.filterNames.length > 0 ? this.state.filterNames : this.state.data;
    return (
      <div className='App'>
        <div className='search-bar'>
          <SearchBar search={this.handleSearch} />
        </div>

        {renderedData.map(post => {
          return <PostContainer post={post} key={post.id} />;
        })}
      </div>
    );
  }
}

export default withAuthenticate(App)(Login);
