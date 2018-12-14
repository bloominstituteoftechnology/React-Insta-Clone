import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: dummyData,
      inputText: ''
    }
  }
  handleInput = event =>{
    this.setState({
      inputText: event.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <SearchBar handle={this.handleInput} search={this.inputText}/>
        {this.state.data.map((data,i) => <PostContainer key={i} data={data} handle={this.handleInput} comment={this.inputText} />)}
      </div>
    );
  }
}

export default App;
