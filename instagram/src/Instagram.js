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
            optionsOpened: false,
            offset: 0
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
        const offset = window.pageYOffset
        document.body.style.position = "fixed";
        document.body.style.top = `-${offset}px`;

        this.setState({
            optionsOpened: true,
            offset
        })
    }
    closeOptions = () => {
        document.body.removeAttribute('style');
        window.scrollTo(0, this.state.offset);
        
        this.setState({
            optionsOpened: false,
            offset: 0
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
                    <div className="instagram__nav">
                        <a className="discover" href="/" onClick={(e) => e.preventDefault()}>Discover</a>
                        <a className="feed" href="/" onClick={(e) => e.preventDefault()}>Feed</a>
                        <a className="profile" href="/" onClick={(e) => e.preventDefault()}>Profile</a>
                    </div>
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