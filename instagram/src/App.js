import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import PostsPage from './components/PostContainer/PostsPage' ;



class App extends React.Component {
 
  constructor(){
 
    super();

    this.state = {

      data: dummyData,

      text: '',
      // empty array, should be able to link existing comments here and push user object.
      newComment: [],

      asyncMessage: ''
   
    };
  
  }

  LikeButton = () => (
    <i className="fa fa-heart like-button" />
);

    Comment = () => (
    <i className="fa fa-comment comment "/>
);


  // componentDidMount(){
  //   setTimeout(() => {
  //     this.setState({
  //       LoadingText: 'Page has loaded'});
  //   }, 3000)
  // }


  componentDidMount = () => {

    setTimeout(() => {
      this.setState({asyncMessage: 'Loading..'});
    }, 4000);
  }


  
  // todo: add buttons, synthetic click for search

  inputText = (event) => {

    this.setState({
    
      text: event.target.value
      // prope
    })

  }

  commentUpdater = (event) => {

    this.setState({
        newData: this.newData.push({username: 'LorenzoEvans', text: event.target.value  })
    })


}
  render(){
    return(

      <div> 
     
      <SearchBar 
        inputText={this.inputText} 

        data={this.state.data} 
      
        text={this.state.text}
        
        LikeButton={this.LikeButton}

        Comment={this.Comment}
        
         />
      
        {this.state.data.map(item =>
        
        <div key={item.timestamp} ></div>
        
        )}
     

      {/* check to see if these props are being passed, use console. */}

 
  <PostsPage 

  commentUpdater={this.commentUpdater}

inputText={this.inputText}


   LikeButton={this.LikeButton}

   Comment={this.Comment}

   newComment={this.state.newComment} 

   data={this.state.data}
  
   />
       
 <PostContainer 

 commentUpdater={this.commentUpdater}

 inputText={this.inputText}


    LikeButton={this.LikeButton}

    Comment={this.Comment}
 
    newComment={this.state.newComment} 
 
    data={this.state.data} /> 

  
 
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

export default App;
