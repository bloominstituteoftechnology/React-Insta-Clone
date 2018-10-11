import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";
import dummyData from "../../dummy-data.js";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import '../../App.css';
let data = dummyData;

class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          dummyData: [],
          search: "",
        };
      }
      
      componentDidMount() {
        this.setState({dummyData: data});
      }
    
      searchInputHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    }
    
      searchPosts = event => {
        event.preventDefault();
        let searchInput = this.state.search;
    
        if (!searchInput) {
            this.setState({
              dummyData: data, 
              search: ""
            });
          }
        else {
            let posts = dummyData;
            let searchedPosts = posts.filter(post => {
              return post.username.includes(searchInput);
        })
          this.setState({dummyData: searchedPosts});
            }
    }

    logout = event => {
        event.preventDefault();
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("username");
        window.location.reload();
    }

    reloadContent = () => {
      this.setState({dummyData: data});
    }
    
      render() {
        return (
          <div>
            <SearchBar 
            search={this.state.search}
            searchInputHandler={this.searchInputHandler}
            searchPosts={this.searchPosts}
            logout={this.logout}
            reloadContent={this.reloadContent}
            />
            <PostContainer 
            posts={this.state.dummyData}
            />
          </div>
        );
      }
    }


export default PostPage;