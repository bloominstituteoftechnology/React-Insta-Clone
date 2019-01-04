import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
// import commentData from './components/CommentSection/commentData';
// import CommentSection from './components/CommentSection/CommentSection';
import SearchBar from './components/SearchBar/SearchBar';
import PropTypes from "prop-types";



class App extends Component {
  constructor (){
    super();
    this.state ={
      userPosts: [],
      filteredPosts: []
      // commentData: commentData
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

  componentDidMount() {
    this.setState({ userPosts: dummyData });
  }

  componentDidUpdate(){
    console.log('Did it work?')
  }

  // handleChange = (e) => {
  //   this.setState({
  //     filteredPosts: e.target.value
  //   })
  //   this.onChange(e.target.value)
  // }

  searchFilter = p => {
    const filteredPostResults = this.state.userPosts;
    console.log("filtered posts: ", filteredPostResults)
     filteredPostResults.filter((post) => {
      let userPostName = post.username.toLowerCase();
    // return post.username.toLowerCase().search(
    //   post.username.value.toLowerCase()) !== -1;
        // return userPostName.indexOf( 
        //   p.toLowerCase()) !== -1
           if (userPostName.includes(p.target.value)){
      return post;
    }
    });
    this.setState({
      filteredPosts: filteredPostResults
    })
  }

  // searchFilter = event => {

  //   const filteredPosts2 = this.state.userPosts;
  //   console.log("filtered posts: ", filteredPosts2)
  //    filteredPosts2.filter((post) => {
  //     let userPostName = post.username.toLowerCase();
  //   if (userPostName.includes(event.target.value)){
  //     return post;
  //   }
  // });
  // this.setState({ filteredPosts: filteredPosts2 });
  // }


  // searchFilterBar = posts => {
  //   const postResults = this.state.userPosts.filter(post => {
  //     if (post.username)
  //   })
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <SearchBar 
                  // users={this.state.userPosts}
                  // search={this.state.search}
                  searchFilteredPosts={this.searchFilter}
        />
       <PostContainer 
       posts={
         this.state.filteredPosts.length > 0 
         ? this.state.filteredPosts
         : this.state.userPosts
        } 
        // onChange={this.filteredPosts}
        // match={this.props.match}
       />
       {/* <CommentSection commentInput={this.state.userPosts} /> */}
      </div>
    );
  }
}

App.propTypes = {
  dummyData: PropTypes.array,
}

export default App;
