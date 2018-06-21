import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import './App.css';



class App extends Component {
constructor(props) {
super();
this.state = {
 data: [],
 search: '',
}
}

componentDidMount() {
this.setState({data: dummyData,
})
}

search = (event) => {
  event.preventDefault();
  let term = event.target.value;
  let searchData = this.state.data.slice();

  // searchData = searchData.filter(post => post.username === term);
  searchData = searchData.filter(post => post.username.includes(term));

  if (term.length < 1) {
this.setState({
  data: dummyData,
})
  }else {
  this.setState({
    data: searchData,
  })
  }

}
login = (event) => {
  console.log('attempting to login');
  // window.location.reload(true);
}

 handleChange = (event) => {
   event.preventDefault();
   this.setState({
     [event.target.name]: event.target.value,
   });
 };


  render() {
    return (
    <PostsPage login = {this.login} data = {this.state.data} handleChange = {this.handleChange} value ={this.state.search} search = {this.search} />
    );
  }
}

export default App;
