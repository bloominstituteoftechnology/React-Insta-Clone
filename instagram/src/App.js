import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
// import commentData from './components/CommentSection/commentData';
// import CommentSection from './components/CommentSection/CommentSection';
import SearchBar from './components/SearchBar/SearchBar';
import PropTypes from "prop-types";
import PostsPage from './components/PostContainer/PostsPage';



class App extends Component {
  constructor (){
    super();
    this.state ={
      validated: false
      // userPosts: [],
      // filteredPosts: []
      // commentData: commentData
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <PostsPage 
        posts={
          this.state.posts
          } 
          filteredPosts={this.state.filteredPosts}
        />
        {/* <SearchBar 
                  searchFilteredPosts={this.searchFilter}
        />
       <PostContainer 
       posts={
         this.state.filteredPosts.length > 0 
         ? this.state.filteredPosts
         : this.state.userPosts
        } 
       /> */}
       {/* <CommentSection commentInput={this.state.userPosts} /> */}
      </div>
    );
  }
}

  // componentDidMount(){
  //  console.log(dummyData);
  //   console.log("Component did mount")
  //   setTimeout(() => {
  //     this.setState = ({
  //       userPosts: dummyData
  //     });
  //   }, 2000);
  // }

  // componentDidMount() {
  //   this.setState({ userPosts: dummyData });
  // }

  // componentDidUpdate(){
  //   console.log('Did it work?')
  // }

  // handleChange = (e) => {
  //   this.setState({
  //     filteredPosts: e.target.value
  //   })
  //   this.onChange(e.target.value)
  // }

  // searchFilter = event => {
  //   let filteredPostResults = this.state.userPosts;
  //   // console.log("filtered posts: ", filteredPostResults)
  //   filteredPostResults = filteredPostResults.filter((post) => {
  //     console.log("filtered posts: ", filteredPostResults)
  //     let userPostName = post.username.toLowerCase();
  //   // return post.username.toLowerCase().search(
  //   //   post.username.value.toLowerCase()) !== -1;
  //       // return userPostName.indexOf( 
  //       //   p.toLowerCase()) !== -1
  //          if (userPostName.includes(event.target.value)){
  //     return post;
  //   }
  //   });
  //   this.setState({
  //     filteredPosts: filteredPostResults
  //   })
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         {/* <img src={logo} className="App-logo" alt="logo" /> */}
  //       </header>
  //       <SearchBar 
  //                 searchFilteredPosts={this.searchFilter}
  //       />
  //      <PostContainer 
  //      posts={
  //        this.state.filteredPosts.length > 0 
  //        ? this.state.filteredPosts
  //        : this.state.userPosts
  //       } 
  //      />
  //      {/* <CommentSection commentInput={this.state.userPosts} /> */}
  //     </div>
  //   );
  // }

  

App.propTypes = {
  dummyData: PropTypes.array,
}

export default App;
