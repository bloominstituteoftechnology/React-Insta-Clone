import React, { Component } from 'react';
import Div from '../styles/div';
import Header from '../styles/header'
import Loader from 'react-loader-spinner';
import dummyData from '../../dummy-data';
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import AccountMenu from './AccountMenu/AccountMenu';

export default class PostPage extends Component {
    constructor() {
        super();
        this.state = {
            liked: false,
            searchValue: '',
            account: false,
            data: []
        };
    }

    componentDidMount() {
        this.setState({
            data: localStorage.getItem('data') === null ? dummyData : JSON.parse(localStorage.getItem('data'))
        });
    }

    submitComment = (timestamp, comment) => {
        const commentMatch = this.state.data[this.state.data.map((obj, i) => obj.timestamp === timestamp && i).filter(arr => arr !== false).pop()];

        commentMatch.comments.push(comment);

        localStorage.setItem('data', JSON.stringify(this.state.data))
    }

    search = e => {
        this.setState({ searchValue: e.target.value }, this.searchMatch);
    }

    searchMatch = () => {

        const data = JSON.parse(localStorage.getItem('data')) === null ? dummyData : JSON.parse(localStorage.getItem('data')),
            search = data.filter(post => (
                post.username.toLowerCase().includes((this.state.searchValue).toLowerCase())
                ||
                post.comments.map(comm => (
                    comm.text.toLowerCase().includes((this.state.searchValue).toLowerCase())
                    ||
                    comm.username.toLowerCase().includes((this.state.searchValue).toLowerCase())
                )) === true
            ));

        console.log(data)

        search.length !== 0 && this.setState({ data: search });

        this.state.searchValue.length === 0 && this.setState({ data: data });
    }

    deleteComment = (postIndex, id) => {

        let clone = [...this.state.data];

        clone[postIndex].comments = clone[postIndex].comments.filter(arr => arr.id !== id);

        this.setState({ data: clone });

        localStorage.setItem('data', JSON.stringify(clone));
    }

    render() {
        if (this.state.data.length === 0) {
            return (
                <Div App>
                    <Header>
                        <i className='fab fa-instagram' />
                        <i className='headName'>Instagram</i>
                        <SearchBar
                            search={this.search}
                            searchMatch={this.searchMatch}
                            searchValue={this.state.searchValue}
                        />
                        <Div cont>
                            <i className='far fa-compass' />
                            <i className='far fa-heart' />
                            <i className='far fa-user' />
                        </Div>
                    </Header>
                    <Loader type="Triangle" color="darkgreen" height={80} width={80} />
                </Div>
            )
        } else {
            return (
                <Div App>
                    <Header>
                        <i className='fab fa-instagram' />
                        <i className='headName'>Instagram</i>
                        <SearchBar
                            search={this.search}
                            searchValue={this.state.searchValue}
                        />
                        <Div cont>
                            <i className='far fa-compass' />
                            <i className='far fa-heart' />
                            <i
                                onClick={() => this.setState({ account: !this.state.account })}
                                className={this.state.account === false ? 'far fa-user' : 'fas fa-user'}
                            />
                        </Div>
                        <AccountMenu account={this.state.account} />
                    </Header>
                    {this.state.data.map((post, i) => (
                        <PostContainer
                            post={post}
                            index={i}
                            key={post.timestamp}
                            liker={this.liker}
                            liked={this.state.liked}
                            submitComment={this.submitComment}
                            deleteComment={this.deleteComment}
                        />
                    ))}
                </Div>
            );
        }
    }
}
