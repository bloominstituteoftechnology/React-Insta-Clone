import React, { Component } from 'react';

import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './Authentication/Authenticate';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  // addLike = (event, index) => {
  //   this.setState({ 
  //     data: this.state.data.map((item, idx) => {
  //       if (index !== idx) {
  //         return item;
  //       } else {
  //         return {
  //           ...item,
  //           likes: item.likes + 1,
  //         }
  //       }
  //     })
  //   })
  // }

  render() {
    return (
      <div className="App">
        <PostsPage data={this.state.data} />
      </div>
    );
  }
}



export default Authenticate(App);
