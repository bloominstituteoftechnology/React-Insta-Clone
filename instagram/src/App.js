import React, { Component } from 'react';
import dummyData from './components/dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      data: [],
      input: ''
    };
    this.addNewComment = this.addNewComment.bind(this);
  }
  addNewComment(e, index){
    const obj = {
                  text: e.target.value,
                  username: 'sibaht'
                }

    const dataItem = Object.assign({}, this.state.data[index]);
    dataItem.comments.push(obj);
    this.setState({
      dataItem
    })
    e.target.value ="";
  }
  addNewLike = (index) =>{
    let dataItem =  this.state.data.slice();
    let like = dataItem[index].likes + 1;
    dataItem[index].likes = like;
    this.setState({
      data: dataItem
    })
  }
  componentDidMount () {
    this.setState({
      data: dummyData
    })
    window.localStorage['app__data'] = JSON.stringify(this.state.data[0]);
  }
  

  render() {
    return (
      <div className="app">
        <SearchBar />
        {this.state.data.map((i, index) => (<PostContainer 
            key={index} 
            index={index}
            data={i} 
            addComment={this.addNewComment}
            likes = {index === 0 ?  null: index}
            addLike={this.addNewLike}
            />))}
      </div>
    );
  }
}

export default App;
