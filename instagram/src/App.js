import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import dummyData from './components/dummy-data';
// console.log(dummyData);
import CommentSection from './components/CommentSection/CommentSection'
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'
import ReactDOM from 'react-dom'
import dummyData from './components/dummy-data';
class App extends Component {
  constructor (){
  super();
  this.state = {
    dummyData:  []
  };
 
  }
  componentDidMount() {
    this.setState({dummyData});
  }

  // getCharacters = URL => {
    
  
  //   fetch(URL)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       this.setState({ dumData: data.results});
  //     })
  //     .catch(err => {
  //       throw new Error(err);
  //     });
    
  // };

  render() {
    return (
      <div className="App">
        
        <div>
        <SearchBar/>
        <PostContainer
        post = {this.state.dummyData}
        />
        <CommentSection
        comm = {this.state.dummyData}/>
        </div>
       
      </div>
    );
  }
}

export default App;
