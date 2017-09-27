import React, {Component} from 'react';
import './Styles/Posts.css';
import Post from './Post';
import SearchNav from './SearchNav';
import {newsFeed} from './NewsFeed.js';

export default class Posts extends Component {
    constructor(){
        super();
        this.state ={Posts:[]};
    }
    
    componentDidMount(){
       
        this.setState({
            
            Posts: newsFeed
        });
    }
    render(){
        return(
            <div id="posts">
                <SearchNav newsFeed={this} posts={newsFeed} />
                {this.state.name}
                <Post newsFeed={this} posts={this.state.Posts} />


            </div>
        );
    }
}