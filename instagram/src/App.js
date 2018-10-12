import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import PostsPage from './components/PostContainer/PostsPage' ;
import Authenticate from './components/Authentication/Authenticate';
import styled from 'styled-components'

const Body = styled.body`

justify-content: center ;
flex-direction: column ;
font-size: 1.6rem ;

`
const HTML = styled.html`
font-size: 62.5%
display: flex ;
justify-content: center ;
border: 2px solid black ;

`

const Root = styled


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      data: dummyData,
      text: '',
      newComment: [],
      asyncMessage: '',
      searchedComment: [],


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

render(){

    
  return(
    <div>
    <HTML> <Body> 
    <Authenticate />
    <SearchBar 

        inputText={this.inputText} 

        data={this.state.data} 
      
        text={this.state.text}
        

        
      
        {...this.state.data.map(item =>
        
        <div key={item.timestamp} ></div>
        
        )}
    />
    <PostContainer

      commentUpdater={this.commentUpdater}



inputText={this.inputText}


   newComment={this.state.newComment} 



   data={this.state.data}
    
     />
    <PostsPage 
        commentUpdater={this.commentUpdater}

inputText={this.inputText}




   newComment={this.state.newComment} 

   data={this.state.data}
    />


 </Body>
</HTML>
   
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




export default  Authenticate(App) 