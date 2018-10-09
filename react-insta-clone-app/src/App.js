import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer"
import CommentSection from "./components/CommentSection/CommentSection"
import heart from "./img/heart-2.svg";
import chat from "./img/chat-46.svg";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      dataComments: [],
    }
  }
  componentDidMount() {
    let newData = this.state.data;
    newData.push(dummyData);
    // console.log(this.state.data[0].map(function(object){
    //   return (
    //     object.comments.map(function(comment){
    //       return (
    //         comment
    //       )
    //     })
    //   )
    // }))
    let newCommentData = this.state.dataComments;
   newCommentData.push(this.state.data[0].map(function(object){
      return (
        object.comments.map(function(comment){
          return (
            comment
          )
        })
      )
    }));
    this.setState({
      data: newData,
      dataComments: newCommentData,
    });
    // console.log(this.state.data)
    console.log(this.state.data[0])
  }

  addNewComment = (event, index) => {
    event.preventDefault();
    if (event.key === 'Enter'){
        let commentsArr = this.state.dataComments[0];
        let commentsList = commentsArr.map(function(commentGrp){
          return (
            commentGrp.map(function(comment){
              return (
                comment
              )
            })
          )
        })
        commentsList.push({
          username: "CJuelfs15",
          text: event.target.value
        });
        this.setState({
            dataComments: commentsList,
        });
        event.target.value = '';
        console.log('works inside')
    } 
    console.log('works')
  }
  handleLikesIncrement = (event, index) => {
    event.preventDefault();
    this.state.data[0].map(function(post){
      
    })
  }

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

  //Day 2 (data thru state):
  render() {
    return (
      <div className='App'>
        <SearchBar className='search-bar-container'/>
        <div className='all-posts'>
          {this.state.data.map(function(item){
            return (
              item.map(function(object){
                return (
                  <div key={object.timestamp} className='post-container'>
                    <PostContainer src1={object.thumbnailUrl} src2={object.imageUrl} alt={object.username} title={object.username} srcIcon1={heart} srcIcon2={chat} altIcon1='heart-icon' altIcon2='chat-icon' likesCounter={object.likes} />
                    <div className='comment-section'>
                      {object.comments.map(function(comment){
                        return (
                          <CommentSection commentUsername={comment.username} commentText={comment.text} />
                        );
                      })}
                      <form onSubmit = {(index) => this.addNewComment}>
                        <input placeholder='Add a comment...' className='comment-input'></input>
                      </form>
                    </div>
                  </div>
                )
              })
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
