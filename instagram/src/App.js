import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import postData from './application-data';
import PostContainer from './PostContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      modal: false,
    }
    this.changeModalState = this.changeModalState.bind(this);
  }
  componentDidMount() {
    this.setState({posts: postData})
  }
  changeModalState(e) {
    e.preventDefault();
    if (!this.state.modal) {
      return this.setState({modal: true})
    } else {
      return this.setState({modal: false})
    }
  }
  render() {
    return (
      <div className="App">
        <div className={this.state.modal ? "modal-shown" : "modal-hidden"}>
          <div className="modal" >
            <button className="report">Report Inappropriate</button>
            <button className="report" onClick={this.changeModalState}>Cancel</button>
          </div>
        </div>
        <SearchBar />
        <article className="card">
        <ul>
            {postData.map((post) => {
                return <PostContainer postData={post} changeModalState={this.changeModalState}/>
                })}
        </ul>
        </article>
      </div>
    );
  }
}

export default App;
