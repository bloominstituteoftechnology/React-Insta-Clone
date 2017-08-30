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
      reported: false,
      thanks: false,
      move: false
    }
    this.changeModalState = this.changeModalState.bind(this);
    this.changeModalButtonState = this.changeModalButtonState.bind(this);
    this.changeThanksState = this.changeThanksState.bind(this);
  }
  componentDidMount() {
    this.setState({posts: postData})
  }
  componentDidUpdate() {
    if (this.state.thanks) {
      setTimeout(() => {
        return this.setState({thanks: false})
      }, 3000);
    }
  }
  changeModalState(e) {
    e.preventDefault();
    if (!this.state.modal) {
      return this.setState({
        modal: true,
        reported: false
      })
    } else {
      return this.setState({modal: false})
    }
  }
  changeModalButtonState(e) {
    e.preventDefault();
    if (!this.state.reported) {
      return this.setState({reported: true})
    } else {
      return this.setState({reported: false})
    }
  }
  changeThanksState(e) {
    e.preventDefault();
    if (!this.state.thanks) {
      return this.setState({
        modal: false,
        thanks: true,
        reported: false
      })
    } else {
      return this.setState({thanks: false})
    }
  }
  
  render() {
    return (
      <div className="App" >
        <div className={this.state.modal ? "modal-shown" : "modal-hidden"}>
          <div className={this.state.reported ? "modal-hide": "modal"} >
            <button className="report" onClick={this.changeModalButtonState}>Report Inappropriate</button>
            <button className="report" onClick={this.changeModalState}>Cancel</button>
          </div>
          <div className={this.state.reported ? "modal":"modal-hide"}>
            <button className="report" onClick={this.changeThanksState}>I don't like this photo</button>
            <button className="report" onClick={this.changeThanksState}>This photo is spam or a scam</button>
            <button className="report" onClick={this.changeThanksState}>This photo puts people at risk</button>
            <button className="report" onClick={this.changeThanksState}>This photo shouldn't be on Instagram</button>
            <button className="report" onClick={this.changeModalState}>Cancel</button>
          </div>
        </div>
        <div className={this.state.thanks ? "sub":"sub-hide"}>Your report has been submitted</div>
        <SearchBar move={this.state.move} />
        <article className="card" onFocus={this.changeMoveTrue}>
        <ul>
            {postData.map((post, i) => {
                return <PostContainer postData={post} key={i} changeModalState={this.changeModalState}/>
                })}
        </ul>
        </article>
      </div>
    );
  }
}

export default App;
