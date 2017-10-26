import React, { Component } from 'react';
import Post from './components/PostContainer';

import posts from './application-data';

class Instagram extends Component {
    constructor() {
        super();
        this.state = {
            username: 'vibes',
            posts
        }
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
    render() {
        return (
            <div className="instagram">
                {
                    posts.map((post, index) => (
                        <Post post={post} key={index} index={index} addComment={(comment) => this.addComment(index, comment)}/>
                    ))
                }
            </div>
        )
    }
}

export default Instagram;