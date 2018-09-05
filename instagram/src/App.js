import React from 'react';
import Authenticate from './Components/Auth/Auth';
import PostsPage from './Components/PostContainer/PostsPage';
import './App.css';
const App = () => <PostsPage />;

export default Authenticate(App);

// import React, { Component } from 'react';
// import dummyData from './dummy-data';
// import PostContainer from './Components/PostContainer/PostContainer';
// import SearchBar from './Components/SearchBar/SearchBar';
// import CommentSection from './Components/CommentSection/CommentSection';
// import './App.css';

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       posts: [],
//       searchText: '',
//       filteredPosts: [],
//       username: 'kevinsooter'
//     };
//   }

//   componentDidMount() {
//     if (window.localStorage.getItem('comments')) {
//       this.setState({
//         posts: JSON.parse(window.localStorage.getItem('comments'))
//       });
//     } else {
//       this.setState({ posts: dummyData });
//     }
//     window.localStorage.setItem('comments', JSON.stringify(dummyData));
//   }

//   // componentDidMount() {
//   //   this.setState({ posts: dummyData });
//   // }

//   searchHandler = event => {
//     this.setState({ searchText: event.target.value });

//     setTimeout(() => {
//       const posts = this.state.posts.filter(post => {
//         return post.username.includes(this.state.searchText) ? post : null;
//       });

//       if (posts.length > 0) {
//         this.setState({ filteredPosts: posts });
//       } else {
//         return;
//       }
//     }, 20);
//   };

//   render() {
//     return (
//       <div className="App">
//         <div className="wrapper">
//           <header>
//             <div className="instaclone-logo">
//               <i className="fab fa-instagram" />
//               <p>Instagram</p>
//             </div>
//             <SearchBar searchHandler={this.searchHandler} />
//             <div className="social-icons">
//               <i className="far fa-compass" />
//               <i className="far fa-heart" />
//               <i className="far fa-user" />
//             </div>
//           </header>
//           <div className="posts-wrapper">
//             <PostContainer
//               data={
//                 this.state.filteredPosts.length > 0
//                   ? this.state.filteredPosts
//                   : this.state.posts
//               }
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
