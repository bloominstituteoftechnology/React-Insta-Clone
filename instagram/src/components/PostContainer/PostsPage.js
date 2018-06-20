import React from 'react';
import Search from '../SearchBar/Seach' ;
import PostContainer from '../PostContainer/PostContainer' ;
import dummyData from '../../dummy-data' ;
{/*NO CSS IMPORT*/}


class PostsPage extends React.Component {
  constructor(props) {
    super(props) ;
    console.log('constructor called-PostsPage') ;
    this.state = {
      userData: []      
    } ;
  }
  componentDidMount() {
    console.log('componentDidMount setState called-PostsPage') ;
    this.setState({
      userData: dummyData
    });
  }
  addNewComment = (event, index) => {
    alert('greeting from PostsPage.js') ;
  }
  render() {
    console.log('rendered called-PostsPaged') ;
    return (
      <div className="posts-page">
        <Search />

           
        {/* passing each obj(post) one-by-one to PostContainer */}
        {/* {this.state.userData.map((post, index) => {
          return (
            <PostContent key={index} post={post} />
          )
        })} */}
        <PostContainer propUserData={this.state.userData} />

        {/* <PostContainer propUserData = {this.state.userData} /> */}
      </div>
    );
  }
}

export default PostsPage;

