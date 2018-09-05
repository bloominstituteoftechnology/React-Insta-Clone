import React from 'react';
import dummyData from '../../dummy-data';
import PostsContainer from './PostsContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts : []
        }
    }



  componentDidMount() {
    this.setState({posts : dummyData});
    console.log('componentDidMount');
  }
  

  render(){
      return(
          <div className="App">
      <header>
        <SearchBar search={this.search} />
        </header>

        <main>
          <PostsContainer posts={this.state.posts} />
      </main>

      </div>
      )
  }

}

export default PostsPage;