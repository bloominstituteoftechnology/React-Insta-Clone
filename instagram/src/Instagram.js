import React, { Component } from 'react';
import Post from './components/PostContainer';
import SearchBar from './components/SearchBar';
import Options from './components/Options';

import posts from './application-data';
import './assets/css/instagram.css';

class Instagram extends Component {
    constructor() {
        super();
        this.state = {
            username: 'vibes',
            allPosts: posts,
            posts,
            optionsOpened: false
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
    toggleLike = (id, event) => {
        event.preventDefault();
        const posts = this.state.allPosts.reduce((posts, post, index) => {
            if(id === index) {
                post.liked = !post.liked;
                post.likes = post.liked ? post.likes + 1 : post.likes - 1;
            }
            return [...posts, post];
        }, []);

        this.setState({
            allPosts: posts
        })
    }
    openOptions = () => {
        const offsetY = window.pageYOffset
        document.body.style.position = "fixed";
        document.body.style.top = `-${offsetY}px`;

        this.setState({
            optionsOpened: true
        })
    }
    closeOptions = () => {
        document.body.style.position = "";
        document.body.style.top = "";
        this.setState({
            optionsOpened: false
        })
    }
    render() {
        return (
            <div className="instagram">
            {
                this.state.optionsOpened ? <Options close={this.closeOptions}/> : null
            }
            <header className="instagram__header">
                <nav>
                    <a className="logo" href="/">instagram</a>
                    <SearchBar search={this.search}/>
                </nav>
            </header>
                <section className="posts">
                {
                    this.state.posts.map((post, index) => (
                        <Post post={post} key={index} index={index} 
                            addComment={(comment) => this.addComment(index, comment)}
                            toggleLike={(event) => this.toggleLike(index, event)}
                            openOptions={this.openOptions}/>
                    ))
                }
                </section>
            </div>
        )
    }
}

export default Instagram;