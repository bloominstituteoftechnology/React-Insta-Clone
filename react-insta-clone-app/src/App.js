import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostConainer from "./components/PostContainer/PostContainer"

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <SearchBar className='search-bar-container'/>
        <div>
          {dummyData.map(function(item){
            return (
              <div className='post-container'>
                {/* <PostConainer src={item.thumbnailUrl} alt={item.username} text={item.username} /> */}
                <div className='post-title'>
                  <img className='post-title-thumbnail' src={item.thumbnailUrl} alt={item.username} />
                  <span className='post-title-username'>{item.username}</span>
                </div>
                <img className='post-image' src={item.imageUrl} alt={item.username}/>
                <div className='comment-box'>
                  {item.comments.map(function(comment){
                    return (
                      <div className='individual-comment'>
                        <span className='comment-username'>{comment.username}</span>
                        <span className='comment-text'>{comment.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

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
