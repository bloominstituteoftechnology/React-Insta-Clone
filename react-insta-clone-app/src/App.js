import React from "react";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import "./App.css";
import Authenticate from './components/Authentication/Authentication';

class App extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  filterPosts = str => {
    const filteredPosts = dummyData.filter(post => post.username.includes(str));
    this.setState({ data: filteredPosts });
  };

   // Day 1 refactored:
  // render() {
  //   return (
  //     <div className='App'>
  //       <SearchBar className='search-bar-container'/>
  //       <div className='all-posts'>
  //         {dummyData.map(function(item){
  //           return (
  //             <div className='post-container'>
  //               <PostContainer src2={item.imageUrl} src1={item.thumbnailUrl} alt={item.username} title={item.username} srcIcon1={heart} srcIcon2={chat} altIcon1='heart-icon' altIcon2='chat-icon' likesCounter={item.likes}/>
  //               {/* <div className='post-title'>
  //                 <img className='post-title-thumbnail' src={item.thumbnailUrl} alt={item.username} />
  //                 <span className='post-title-username'>{item.username}</span>
  //               </div> */}
  //               {/* <img className='post-image' src={item.imageUrl} alt={item.username}/> */}
  //               <div className='comment-section'>
  //                 {item.comments.map(function(comment){
  //                   return (
  //                     // <div className='individual-comment'>
  //                     //   <span className='comment-username'>{comment.username}</span>
  //                     //   <span className='comment-text'>{comment.text}</span>
  //                     // </div>
  //                     <CommentSection commentUsername={comment.username} commentText={comment.text} />
  //                   );
  //                 })}
  //                 <input placeholder='Add a comment...' className='comment-input'></input>
  //               </div>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className="App">
        <SearchBar className='search-bar-container' filterPosts={this.filterPosts} />
        <PostContainer className='post-container' posts={this.state.data} />
      </div>
    );
  }
}

export default Authenticate(App);