import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import dummyData from './dummy-data';
import Header from './components/Header/Header';
import PostContainer from './components/PostContainer/PostContainer'
import LoginForm from './components/LoginForm/LoginForm'
import SignupForm from './components/SignupForm/SignupForm'



import './App.css';


class App extends React.Component {

    constructor(){
      super();
      this.state = {
        posts: dummyData,
        searchPost: ""
        
      }
      
    }

handleChange = (e) => {
  console.log(this.state.searchPost)
  this.setState({searchPost: e.target.value})
}


render() {
  let search = this.state.posts.filter(post => {
    return post.username.toLowerCase().includes(this.state.searchPost.toLocaleLowerCase())
  })
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginForm}/>
          <Route exact path="/signup" component={SignupForm}/>
          <Route exact path="/home">
            <Header handleChange={this.handleChange}/>
            <PostContainer posts={search} />
          </Route>
        </Switch>
      </Router>
    </div>
  
  );
  
}

}

export default App;
