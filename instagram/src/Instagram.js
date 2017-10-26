import React, { Component } from 'react';
import Post from './components/PostContainer';
import SearchBar from './components/SearchBar';

import posts from './application-data';
import './assets/css/instagram.css';

class Instagram extends Component {
    constructor() {
        super();
        this.state = {
            username: 'vibes',
            allPosts: posts,
            posts
        }
    }
    search = (value) => {
        const posts = this.state.allPosts.filter(post => {
            return post.username.includes(value);
        })
        this.setState({
            posts
        })
    }
    addComment = (id, comment) => {
        const posts = this.state.posts.reduce((posts, post, index) => {
            if(id === index) {
                post.comments = [...post.comments, {
                    username: this.state.username,
                    text: comment
                }]
            }
            return [...posts, post]; 
        }, [])

        this.setState({
            posts
        });
    }
    toggleLike = (id) => {
        
    }
    render() {
        return (
            <div className="instagram">
            <header className="instagram__header">
                <nav>
                    <a className="logo" href="/">instagram</a>
                    <SearchBar search={this.search}/>
                </nav>
            </header>
                <section className="posts">
                {
                    this.state.posts.map((post, index) => (
                        <Post post={post} key={index} index={index} addComment={(comment) => this.addComment(index, comment)}/>
                    ))
                }
                </section>
            </div>
        )
    }
}

export default Instagram;