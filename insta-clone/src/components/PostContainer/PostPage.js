import React from 'react';
import PostContainer from './PostContainer';
import Data from '../../dummy-data';

// styles
import { PostPageContainer } from '../Styles/Styles';


class PostPage extends React.Component {
    constructor(props) {
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
            <PostPageContainer>
                <PostContainer
                    {...this.state}
                    changeHandler={this.changeHandler}
                    addComment={this.addComment}
                    addLike={this.addLike}
                />
            </PostPageContainer>
        )
    }
}

export default PostPage;