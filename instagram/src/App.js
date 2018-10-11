import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import PostsPage from './components/PostContainer/PostsPage' ;
import Authenticate from './components/Authentication/Authenticate';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      data: dummyData,
      text: '',
      newComment: [],
      asyncMessage: '',
      searchedComment: []


    }
  }

componentDidMount = () => {
  setTimeout(() => {
    this.setState({posts: dummyData})
  })
};


inputText = event => {
  this.setState({
    text: event.target.value 
  })
};


commentUpdater = (event) => {
  this.setState({
    newData: this.newData.push({username: 'LorenzoEvans', text: event.target.value})
  })
}

LikeButton = () => (

  <i className="fa fa-heart like-button" />

);



Comment = () => (

  <i className="fa fa-comment comment "/>

);
render(){

    
  return(
    <div>
    <Authenticate />
    <SearchBar 

        inputText={this.inputText} 

        data={this.state.data} 
      
        text={this.state.text}
        
        LikeButton={this.LikeButton}

        Comment={this.Comment}
        
      
        {...this.state.data.map(item =>
        
        <div key={item.timestamp} ></div>
        
        )}
    />
    <PostContainer

      commentUpdater={this.commentUpdater}



inputText={this.inputText}




   LikeButton={this.LikeButton}



   Comment={this.Comment}



   newComment={this.state.newComment} 



   data={this.state.data}
    
     />
    <PostsPage 
        commentUpdater={this.commentUpdater}

inputText={this.inputText}


   LikeButton={this.LikeButton}

   Comment={this.Comment}

   newComment={this.state.newComment} 

   data={this.state.data}
    />




    </div>
  )
}

}



// class App extends React.Component {

//   constructor(){
//     super()

//     this.state = {

//     }
//   }
//   render() {
//     return (
//       <div>
//       {dummyData.map(item => <div key={item.timestamp}>  {item.username}</div>)}
//      
//      
//       <div/>
//     );
//   }
// }




export default App 