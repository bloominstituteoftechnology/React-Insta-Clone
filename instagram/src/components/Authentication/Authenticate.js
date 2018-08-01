import React from 'react';
import dummyData from '../../dummy-data';

const Authenticate = App =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        posts: [],
        searchInfo: ''
      }
  }

  componentDidMount() {
    this.setState({posts: dummyData})
  }

  searchItemHandler =(event)=> {
    this.setState({searchInfo: event.target.value});
  }

  searchSubmitHandler=(event)=> {
    event.preventDefault();
    let myPosts= this.state.posts.filter(item => item.username.toLowerCase() === this.state.searchInfo.toLowerCase());
    this.setState({posts: myPosts, searchInfo: ''});
  }

  render() {
    return
      <div>
        <App posts={this.state.posts} searchItemHandler={this.searchItemHandler} searchInfo={this.state.searchInfo} searchSubmitHandler={this.searchSubmitHandler} />
      </div>
  }
}

export default Authenticate;
