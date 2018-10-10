import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostPage from './components/PostContainer/PostPage';

document.body.classList.add('background-snow');

class App extends React.Component {
  constructor() {
    super();
    this.state= { 
      posts: [],
      postFilter: [],
    };
  }

  componentDidMount() {
    console.log('CDM is running', this.state.posts);
    setTimeout(() => {
      this.setState({
        posts: dummyData,
      });
    }, 800);
  }

  handleFilter = search => {
    const postFilter = this.state.posts.filter(item => item.username.includes(search))
    this.setState({
      postFilter
    })
  }



  render() {
    return (
      <div className="App">
      <div>

    <PostPage 
    handleFilter={this.handleFilter}
    posts={this.state.postFilter.length > 0 ? this.state.postFilter : this.state.posts}/> 

      </div>
      </div>
    );
  }
}

export default App;
