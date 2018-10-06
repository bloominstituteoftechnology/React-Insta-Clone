import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostConainer from "./components/PostContainer/PostContainer"
import CommentSection from "./components/CommentSection/CommentSection"
import heart from "./img/heart-2.svg";
import chat from "./img/chat-46.svg";

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <SearchBar className='search-bar-container'/>
        <div className='all-posts'>
          {dummyData.map(function(item){
            return (
              <div className='post-container'>
                <PostConainer src2={item.imageUrl} src1={item.thumbnailUrl} alt={item.username} title={item.username} srcIcon1={heart} srcIcon2={chat} altIcon1='heart-icon' altIcon2='chat-icon' likesCounter={item.likes}/>
                {/* <div className='post-title'>
                  <img className='post-title-thumbnail' src={item.thumbnailUrl} alt={item.username} />
                  <span className='post-title-username'>{item.username}</span>
                </div> */}
                {/* <img className='post-image' src={item.imageUrl} alt={item.username}/> */}
                <div className='comment-section'>
                  {item.comments.map(function(comment){
                    return (
                      // <div className='individual-comment'>
                      //   <span className='comment-username'>{comment.username}</span>
                      //   <span className='comment-text'>{comment.text}</span>
                      // </div>
                      <CommentSection commentUsername={comment.username} commentText={comment.text} />
                    );
                  })}
                  <input placeholder='Add a comment...' className='comment-input'></input>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

//Unrefactored (partial):

// class App extends React.Component {
//   render() {
//     return (
//       <div className='App'>
//         <div className="search-bar">
//           <div className="logo-imgages">
//             <img src={logo} alt="Instagram-Logo" />
//             <img src={title} alt="Instagram-Title" />
//           </div>
//           <input placeholder="search" className="search" />
//           <div className="icons">
//             <img src={compass} alt='compass-icon' />
//             <img src={heart} alt='heart-icon' />
//             <img src={person} alt='person-icon' />
//           </div>
//         </div>
//         <div className='post-container'>

//         </div>
//       </div>
//     );
//   }
// }


export default App;
