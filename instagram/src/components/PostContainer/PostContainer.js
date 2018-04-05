import React, { Component } from 'react';
import './PostContainer.css'

export default class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments:props.comments,
            likes: props.likes,
            newComment: ''
        };
    }

    // At this time the footer and comment parts are not added
    // TODO: Add footer buttons and comment section
    // TODO: Add function to increase the new of likes
    // TODO: Add function to change color of love to red
    render() {
        return (
            <div className='Post'>
                <div className='Post__header'>
                    <img
                    className='Post__thumbnailURL'
                    src={this.props.thumbnailUrl}
                    alt='User Image'
                    />
                    <h1 className='Post__username'>
                        {this.props.username}
                    </h1>
                </div>
                <img
                 className='Post__image'
                 src={this.props.imageUrl}
                 alt='Poster Image'
                />
            </div>
        )
    }
}

