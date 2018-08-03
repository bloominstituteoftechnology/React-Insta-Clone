import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import instaLogo from '../../instagram-logo.png';
import dummyData from '../../dummy-data';
import SearchBarContainer from '../SearchBarComp/SearchBarContainer';
import PostContainer from '../PostsComp/PostContainer';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      postData: [],
      search: '',
      post: '',
      user: ''
    }
  }

  componentDidMount() {
    let id = 'posts';
    if (localStorage.getItem(id)) {
      this.setState({
        postData: JSON.parse(localStorage.getItem('posts')),
        user: localStorage.getItem('user')
      });
    } else {
      this.setState({ postData: dummyData, user: localStorage.getItem('user') });
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  addNewPost = (e) => {
    e.preventDefault();
    let posts = this.state.postData.slice();
    posts.push(
      {
        username: this.state.user,
        thumbnailUrl: "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg",
        imageUrl: this.state.post,
        likes: 0,
        timestamp: "NOW",
        comments: []
      }
    );
    this.setState({ postData: posts })
    setTimeout(() => {
      this.setPosts();
    }, 500);
  }

  setPosts = () => {
    localStorage.setItem(
      'posts',
      JSON.stringify(this.state.postData)
    );
  }

  render() {
    console.log(this.state.postData)
    let filteredPosts = this.state.postData.filter((post) => {
        return (post.username.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase()));
    });
    return (
      <div className="main-container">
        <header className="main-header">
          <section className="main-header__logos">
            <div className="main-header__logo-container">
              <FontAwesomeIcon className="main-header__logo" icon={faInstagram} />
            </div>
            <div className="main-header__logo-container">
              <img className="main-header__logo" src={instaLogo} alt="instagram logo"/>
            </div>
          </section>
          <SearchBarContainer 
            searchValue={this.state.search}
            onChange={this.handleChange}
          />
          <section className="main-header__icons">
            <FontAwesomeIcon icon={faCompass} />
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faUser} />
          </section>
        </header>
        <section>
          <form onSubmit={this.addNewPost} action="submit">
            <label htmlFor="post"></label>
            <input 
              type="text"
              id="post"
              name="post"
              placeholder="Photo URL"
              value={this.state.post}
              onChange={this.handleChange}
            />
            <button>Add New Post</button>
          </form>
        </section>
        {filteredPosts.length > 0 ? <PostContainer postData={filteredPosts} /> : <p>No Posts!</p>}
      </div>
    );
  }
}

export default Home;