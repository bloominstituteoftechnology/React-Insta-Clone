import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {dummyData} from './dummyData';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dummyData: []
      };
      this.search = this.search.bind(this);
    };

    componentDidMount() {
      this.setState({ dummyData: dummyData });
    }


    search(user) {
          const searchPosts = this.state.dummyData.filter(post => post.username.includes(user));
          this.setState({
            dummyData: searchPosts,
          });
        }

        

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchBar posts={this.state.dummyData} search={this.search} init={this.initialState} />
        </header>
        <p className="App-intro">Instagram Clone!</p>
        <div className="Posts">
        {this.state.dummyData.map((post, index) => {
          return (
            <PostContainer key={index} post={post}/>        
          )
        })}
        </div>
      </div>
    );
  }
}

export default App;
