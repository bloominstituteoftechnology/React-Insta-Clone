import React, { Component } from 'react';
import dummyData from "./dummy-data"
import Searchbar from "./Components/Searchbar/Searchbar"
import PostContainer from "./Components/PostContainer/PostContainer"
import CommentSection from "./Components/CommentSection/CommentSection"
import './App.css';

class App extends Component {
  constructor() {
    super() 
      this.state = {
        dummyData : []
      }

    }
    componentDidMount() {
      setTimeout(() => {
          this.setState({ dummyData: dummyData})
      }, 1000)
    }

      addNewComment = (newCommentText, postWithNewComment) => {
        const copiedData = this.state.dummyData.map((post) => {
          if (post === postWithNewComment) {
            const newComment = {
              id: Date.now().toString(),
              username: "reactjs",
              text: newCommentText
            }
            const newComments = [...post.comments, newComment ]
            return {
              ...post,
              comments: newComments
            }
          }
          return post;
        })
        this.setState({
          dummyData: copiedData
        })
      }
    
      postLiked = (postToLike) => {
        const copiData = this.state.dummyData.map((post) => {
          if (postToLike === post) {
            let userLikedPost = post.userLiked;
            userLikedPost = !userLikedPost;
            const newLikes = userLikedPost ? post.likes + 1 : post.likes - 1;

            return {
              ...post,
              userLiked: userLikedPost,
              likes: newLikes
            }
          }
          return post;
        })
        this.setState({
          dummyData: copiData
        })
      }

      searchUpdated = (searchText) => {
        if (searchText === "") {
          this.setState({ dummyData: dummyData})
        } else {
          const copiData = this.state.instaData.filter((post) => post.username === searchText)
          this.setState({
            dummyData: copiData
          })  
          }
        }
  
  
        render() {
          return (
            <div className="App">
              <Searchbar searchUpdated={this.searchUpdated} />
              {this.state.dummyData.map((post) => (
                <PostContainer 
                  key={post.id}
                  post={post}
                  newPostCommentSubmitted={this.addNewComment}
                  postLiked={this.postLiked}
                  />
              ))}
              {/* <CommentSection /> */}
            </div>
          );
        }
      }

      export default App;
