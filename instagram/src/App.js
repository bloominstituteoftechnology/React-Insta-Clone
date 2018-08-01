import React, { Component } from 'react';
import './css/index.css';
import DummyData from './dummy-data.js';
import PostsPage from './components/PostContainer/PostsPage.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      displayData: [],
      searchValue: '',
    }
  }

  render() {
    return (
      <div >

        <PostsPage />
      </div>
    );
  }
}

export default App;



//all messed up
//   searchHandler = e => {
//     e.preventDefault();
//     console.log('searchHandler envoked')
//     const searchArray = this.state.data.slice();
//
//     const newSearchArray = [];
//
//     searchArray.forEach( post => {
//       const result = post.comments.filter( comment => {   comment.text.includes(this.state.searchValue)}
//       console.log(comment)
//     );
//           console.log(result);
//       }
//       // do something with filteredPosts
// )
//     this.setState({
//       displayData: newSearchArray,
//       searchValue: '',
//     })
//
// }
