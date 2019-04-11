import React, {Component} from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';

class PostsPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
        dummyData : [],
        searchKeyWord : '',
        posts: [],
    }
  }

  componentDidMount() {
    this.setState({
    posts: dummyData
    });
  }

  searchKey = (e) => {
    e.preventDefault();
    const searchKey = e.target.value;
    const posts = []
    this.state.posts.filter(post => {
      return post.username.includes(searchKey) ? posts.push(post) : null;
    })
    // check if serachkey is blank
    searchKey === '' ? this.setState({posts: dummyData}) : this.setState({posts : posts})
  }
  render() {
    return (
      <section className='posts-page'>
        <SearchBar search={this.searchKey}/>
      {this.state.posts.map((post,index) => {
        return (
          <PostContainer data={post} key={post.timestamp} id={post.timestamp}></PostContainer>
        )
      })}
      </section>
    );
  }
}

export default PostsPage;
