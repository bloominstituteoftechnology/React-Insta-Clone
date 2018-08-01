import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import { Container} from 'reactstrap';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';



class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: [],
      filteredPosts: [],
      searchValue: '',
      userName: props.userName
    };
  }
  componentDidMount(){
    this.setState({ dummyData: dummyData });
  }
  
  searchHandler = event => {
    this.setState({
      searchValue : event.target.value
    });
  }

  handleSearchSubmit = event => {
    event.preventDefault();
    const searchArr = this.state.dummyData.slice();
    const newSearchArr = searchArr.filter(post => post.username.includes(this.state.searchValue));
    this.setState({
      filteredPosts: newSearchArr,
      searchValue:''
    })
  }

  render() {
    return (
      <Container className="App">
        <SearchBar />
        {this.state.dummyData.map(post => <PostContainer key={post.timestamp} postProp={post} />)}
      </Container>
    );
  }
}



export default PostsPage;
