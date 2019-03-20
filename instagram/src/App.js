import React, { Component } from 'react';
import './App.css';
// import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';
import LoginPage from './components/Login/Login';
// import SearchBar from './components/SearchBar/SearchBar'
// import PostContainer from './components/PostContainer/PostContainer'



class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       dummyData: [],
//       searchData: []
//     }
//   }

// componentDidMount() {
//   this.setState({ dummyData: dummyData })
// }

// searchBarHandler = event => {
//   const posts = this.state.dummyData.filter( post => {
//     if (post.username.includes(event.target.value)) {
//       return post
//     }
//   });
//   this.setState({searchData: posts})
// }
     render() {
       return(
         <div className='App'>
           <WithAuthenticate />
         </div>
       );
     };
  // render() {
  //   return (
  //     <div className="App">
  //      <SearchBar searchPosts={this.searchBarHandler}/>
  //      <PostContainer 
  //         postData={
  //           this.state.searchData.length > 0
  //           ? this.state.searchData
  //           : this.state.dummyData} />
  //     </div>
  //   );
  // }
}

const WithAuthenticate = Authenticate(PostsPage)(LoginPage);

export default App;
