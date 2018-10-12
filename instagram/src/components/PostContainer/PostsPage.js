import React from 'react';
import dummyData from '../../dummy-data';
import { PostContainer } from './PostContainer';
import { SearchBar } from '../SearchBar/SearchBar';
import styled from '../../../node_modules/styled-components';

const App = styled.div`
    width: 100%;
    margin: 0 auto
`

const Container = styled.div`
    margin-top: 130px
`

export default class PostPage extends React.Component {
    constructor () {
        super();
        this.state = {
            posts: [],
            search: "",
            displayedPosts: []
        }
    }
    
    componentDidMount() {
        this.setState({
            posts: dummyData
        })
    }  
    searchInputHandler = e => {
        this.setState({
            search: e.target.value
        },() => {
            this.searchHandler()
        })      
    }  
    searchHandler = () => {    
        this.setState({
        displayedPosts: this.state.posts.filter(post => {return post.username.toLowerCase().includes(this.state.search.toLowerCase())})
        })
    }
    render() {
        const renderedPosts = this.state.search ? [...this.state.displayedPosts] : [...this.state.posts]
        return <App>
                    <SearchBar searchInputHandler={this.searchInputHandler} value={this.state.search} />
                    <Container>
                        {renderedPosts.map(post => <PostContainer key={post.timestamp} post={post} incrementHandler={this.incrementHandler} />)}                        
                    </Container>            
                </App>    
    }
}