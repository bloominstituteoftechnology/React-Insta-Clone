import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'; 
// import SearchBar from './components/SearchBar/SearchBar.js'; 
// import PostContainer from './components/PostContainer/PostContainer.js'; 
// import CommentSection from './components/CommentSection/CommentSection.js'; 
// import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';


 


class App extends Component {
  constructor(){
    super();
    this.state = {dummyData: [], cmdCalled: false, searchText: "", prevDummyData: []}
  }

  componentDidMount () {
    
    this.setState({dummyData:dummyData, prevDummyData: dummyData, cmdCalled: true});
    
  }
  
  
  componentWillUnmount () {
    localStorage.removeItem('username')
    localStorage.removeItem('password')
}


  render() {
    
    
    
    return (
        <div className ="App">
          <AuthenticatedApp />
          

        </div>
        

    );
    
  }
}
const AuthenticatedApp = Authenticate(App);

export default App;
