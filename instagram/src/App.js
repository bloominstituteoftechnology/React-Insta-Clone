import React from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import 'font-awesome/css/font-awesome.min.css';

import './App.css';

class App extends React.Component {
  constructor () {
    super (); 
    this.state = {
      data: [],
      searchValue: ''
    }
  }

  componentDidMount(){
    this.setState(state => ({
      data: dummyData,
    }))
  }

  render() {
    return (
      <div className="main-container">
        <SearchBar/>
        {this.state.data.map(post => {
          return <PostContainer 
          userImg={post.thumbnailUrl}
          userName={post.username}
          postImg={post.imageUrl}
          likes={post.likes} />
        })} 
      </div>
    );
  }
}

export default App;
