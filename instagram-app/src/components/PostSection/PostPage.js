import React from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';



class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          posts: [],
          text: '',
          loggedIn: props.loggedIn
        };
      }
    
      componentDidMount() {
        this.setState({
          posts: dummyData
        });
      }
    
      handleChange = e => {
        this.setState({
          text: e.target.value
        });
      }

      handleLogout = () => {
        if(this.state.loggedIn) {
          localStorage.removeItem('username', 'Megan');
          this.setState({
            loggedIn: false
          });
        }
      }
    
      render() {
        return (
          <div className="App">
            <SearchBar handleChange={this.handleChange} text={this.state.text} />
            <button onClick={this.handleLogout}>Logout</button>
            
            <PostContainer posts={this.state.posts} text={this.state.text}/>
          </div>
        );
      }
    
    
}

export default PostPage;