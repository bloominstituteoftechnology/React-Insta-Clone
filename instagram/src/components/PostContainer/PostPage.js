import React from 'react';
import '../../App.css';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';

class PostPage extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            searchInputText: "",
        }
    }

    componentDidMount() {
        this.setState({
            data: dummyData,
        });
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(e.target.value)
    }

    likedToggle = id => 
    this.setState( prevState => ({
        data: prevState.data.map(post => {
            if(post.username === id && post.heartToggle === undefined){
            return {
                ...post,
                heartToggle: true,
                likes: post.likes + 1,            
            };
            } else if (post.username === id && post.heartToggle === true){
            return {
                ...post,
                heartToggle: false,
                likes: post.likes - 1,            
            };
            } else if (post.username === id && post.heartToggle === false){
            return {
                ...post,
                heartToggle: true,
                likes: post.likes + 1,            
            };
            } else return post;
        })
    }));


    render() {

        let filteredArray = this.state.data.filter(
            post => {
                return post.username.indexOf(this.state.searchInputText) !== -1;
            }    
        );
            
        return (
        
            <div className='postPage-container'>

            <div className='searchContainer'>
            {<SearchBar handleChange={this.handleChange} searchText={this.state.searchInputText} />}
            </div>
    
            <div className='postContainer'>
            {filteredArray.map( arg => {
                return <PostContainer 
                arg={arg} 
                key={arg.username} 
                liked={this.likedToggle} 
                />
            })}
            </div>

            </div>
        );
    }
}

export default PostPage;