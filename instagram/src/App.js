import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
    constructor() {
        super();

        this.state = {
            dummydata: [],
            searchString: '',
            philzcoffee: '',
            twitch: '',
            playhearthstone: ''
        }
    }

    componentDidMount() {
        if (window.localStorage.getItem('comments')) {
            this.setState({
                dummydata: JSON.parse(window.localStorage.getItem('comments'))
            })
        } else {
            window.localStorage.setItem('comments', JSON.stringify(dummyData));
            this.setState({
                dummydata: dummyData
            })
        }
    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    searchInput = event => {
        this.setState({ searchString: event.target.value });
    }

    getName = name => {
        return this.state[name];
    }

    onSubmit = event => {
        event.preventDefault();
    }

    addComment = username => {
        let commentSection = JSON.parse(localStorage.getItem('comments'));

        if (this.state[username] === '') {
            return;
        }

        let comments = [];
        const data = this.state.dummydata.slice()
            .map((comment, index) => {
                if (comment.username === username) {          
                    comments = comment.comments;
                    commentSection[index].comments = comment.comments;
                    return comment;
                }
                return comment;
            });

        comments.push({ username: username, text: this.state[username] });
        localStorage.setItem('comments', JSON.stringify(commentSection));

        this.setState({
            dummyData: data,
            [username]: '',
        });
    }

    likeComment = username => {
        let likes = JSON.parse(localStorage.getItem('comments'));

        const data = this.state.dummydata.slice()
            .map((data, index) => {
                if (data.username === username) {
                    if (data.liked) {
                        data.likes--;
                        data.liked = false;
                    } else {
                        data.likes++;
                        data.liked = true;
                    }
                    likes[index].likes = data.likes;
                    likes[index].liked = data.liked;
                    return data;
                }
                return data;
            });

        localStorage.setItem('comments', JSON.stringify(likes));

        this.setState({ dummydata: data });
    }

    render() {
        return (
            <div className="App">
                <SearchBar value={this.state.searchString} onChange={this.searchInput} />
                <PostContainer value={this.getName} searchString={this.state.searchString} likeComment={this.likeComment}
                    addComment={this.addComment} onChange={this.handleInput}
                    onSubmit={this.onSubmit} data={this.state.dummydata} />
            </div>
        );
    }
}

export default App;
