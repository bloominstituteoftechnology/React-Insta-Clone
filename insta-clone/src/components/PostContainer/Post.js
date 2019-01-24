import React from 'react'
import CommenSection from "../CommentSection/CommenSection";
import PropTypes from 'prop-types'

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: this.props.data.likes
        }
    }

    addLike = () => {
        this.setState({likes: this.state.likes + 1})
    }

    render() {
        return (
            <div className='post'>
                <div className='header'>
                    <img src={this.props.data.thumbnailUrl}/>
                    <h2> {this.props.data.username} </h2>
                </div>

                <div className='image'>
                    <img src={this.props.data.imageUrl}/>
                </div>

                <div className='buttons'>
                    <img alt='heart button' onClick={this.addLike}/>
                    <img alt='comment button'/>
                </div>

                <div className='likes'>
                    <p>{this.state.likes} likes</p>
                </div>

                <CommenSection comments={this.props.data.comments} time={this.props.data.timestamp}/>

            </div>
        )
    }
}

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string
    })
};

export default Post