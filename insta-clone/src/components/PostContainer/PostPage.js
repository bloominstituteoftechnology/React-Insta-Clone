import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import Data from '../../dummy-data';
import './PostContainer.css';

class PostPage extends React.Component {
    constructor(props) {
        console.log(props.username)
        super(props);
        this.state = {
            data: [],
            username: props.username,
            newComment: '',
        }

    }

    componentDidMount() {
        this.setState({
            data: Data
        })
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addComment = (event, index) => {
        event.preventDefault()
        let currentComments = this.state.data[index].comments
        currentComments.push({ username: this.state.username, text: this.state.newComment })
        this.setState({
            [this.state.data[index].comments]: currentComments,
            newComment: '',
        })
    }

    addLike = (event, index) => {
        event.preventDefault()
        let currentCount = this.state.data[index].likes + 1
        this.setState({
            [this.state.data[index].likes]: currentCount,
        })
    }

    render() {
        return (
            <div className='postPage'>
                <PostContainer
                    {...this.state}
                    changeHandler={this.changeHandler}
                    addComment={this.addComment}
                    addLike={this.addLike}
                />
            </div>
        )
    }
}

export default PostPage;