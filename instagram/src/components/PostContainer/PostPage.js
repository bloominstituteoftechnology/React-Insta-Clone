import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";
import dummyData from "../../dummy-data";

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
      filteredPosts: [],
      filterTarget: '',
    };
  }

  componentDidMount() {
    this.setState({postData: dummyData})
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };



  filter = (event) => {
  this.changeHandler(event);
   this.setState(prevState => { 
    const filteredPosts = prevState.postData.filter(
      post => {
        return post.username.includes(prevState.filterTarget)
      });
    return {filteredPosts: filteredPosts}
  });
}


  render() {
    
    return (
      <div>
        <SearchBar filterTarget={this.state.filterTarget} filter={this.filter} />
        <PostContainer postItems={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.postData} 
        addLike={this.addLike} 
  
        />
      </div>
    );
  }
}

export default PostPage;
