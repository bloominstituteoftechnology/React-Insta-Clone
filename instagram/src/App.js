import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostsContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.setState({posts : dummyData});
    console.log('componentDidMount');
  }
  

  render() {
    
    /*The root App component of your application should 
    import the dummy data from the dummy-data.js file with import 
    dummyData from './dummy-data'; and iterate over said data, 
    passing each individual object as a prop to an instance of PostContainer.
    */

    return (
      <div className="App">
      <header>
        <SearchBar />
        </header>

        <main>
          <PostsContainer posts={this.state.posts} />
      </main>

      </div>
    );
  }
}

export default App;
