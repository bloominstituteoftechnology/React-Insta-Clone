import React from 'react';
import dummyData from './dummy-data';
import PostsPage from './component/PostContainer/PostsPage';


import './App.css';

class App extends React.Component {
    state = {
      data: [],
      search: '',
      filteredPosts: []
     }
     changeHandler = e => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  componentDidMount(){
    this.setState({data: dummyData})
  }

  searchFilter = e => {
    const filtered= this.state.data.filter(post => post.username.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({filteredPosts: filtered})

  }


render() {
  console.log('render', this.state.data);
  return(
    
      <PostsPage />
   

    )
  }
}
export default App;
