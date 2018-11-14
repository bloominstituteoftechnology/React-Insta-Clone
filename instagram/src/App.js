import React, { Component } from 'react';
import './less/App.less';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';


class App extends Component {
	constructor() {
		super();
		this.state = {
			posts: [],
			commentInput: '',
			searchInput: '',
		};
  }
  
  componentDidMount(){
    this.setState({posts: dummyData})
  }


	handleSearch = (event) => {
    this.setState ({
      searchInput: event.target.value,
    })
    if (event.target.value !== ''){
      this.setState({
          posts: 
          this.state.posts.filter((post) => {
             return  post.username.includes(event.target.value);
          })
        });
    } else {
      this.setState({
        posts: dummyData
      }) 
    }  
	};

  
  handleLike = (event, index) => {
    let number = this.state.posts[index].likes

    console.log(number)
    event.preventDefault();
      this.setState({
        posts: [
        ...this.state.posts,
           
      ]
    })   
  }

	render() {
		return (
			<div className="App">
				<SearchBar 
        />
				<PostContainer
					posts={this.state.posts}
				/>
			</div>
		);
	}
}

export default App;
