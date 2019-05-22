import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostPage from './components/PostPage.js';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      data: [],
      input: "",
      search: dummyData

    }
  }

  componentDidMount () {
    this.setState({data: dummyData});
  }


  render(){
  return (
    <div className="App">
    <span>{this.state.input}</span>
      <PostPage />
    </div>
  );
}
}



export default App;
