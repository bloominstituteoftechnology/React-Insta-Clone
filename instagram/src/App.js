import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import { Container} from 'reactstrap';
import './App.css';
import Authenticate from './components/Authentication/Authenticate';



class App extends Component {
  constructor() {
    super();
    this.state = {
      username:''
    };
  }

  componentDidMount(){
    //login.js > state:username/password, localStorage.setItem()
    const user =localStorage.getItem('user');
    this.setState({username:user})
  }

  render() {
    return (
      <Container className="App">
        <PostsPage />
      </Container>
    );
  }
}



export default Authenticate(App);
