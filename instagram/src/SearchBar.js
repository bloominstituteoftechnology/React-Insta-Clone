import React, {Component} from 'react';
import postData from './application-data.js'
import PostContainer from './postcontainer.js'

class SearchBar extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            searchTerm: '',
            posts: postData
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.searchTerm)
        this.state.posts.map((post, index) => {return post.username === this.state.searchTerm && < PostContainer key={index} Post={post}/>});        
        this.setState({
            searchTerm: ''
        })
        console.log(this.state.searchTerm)
    }
    handleChange(event) {
        console.log(this.state.searchTerm)
        this.setState({
            searchTerm: event.target.value
        });
    }
    render() {
        return (<div>
            <form onSubmit={this.handleSubmit} >
                    <input type="text" onChange={this.handleChange} value={this.state.currentComment}/> 
            </form>

        </div>)
    }
}
export default SearchBar;