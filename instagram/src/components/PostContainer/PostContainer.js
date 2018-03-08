import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types';

class PostContainer extends Component {
    constructor () {
        super();
        this.state = {
            commentPostsArray: [],
            tempObj: {},
        }
    }

    componentDidMount() {
        // all I want is the comments array from each "thing"
        this.setState = {
            tempObj: this.props.thing,
            commentPostsArray: this.props.thing.comments
        }
        // console.log('CDM in PostContainer initialized');
        // console.log(this.state.commentPostArray);

    }

    render() {
        // console.log('render in PostContainer initialized');
        // console.log(this.state.tempObj);
        // passing an array of comments from my object
        return (
            <div><CommentSection thing={this.state.commentPostsArray}/></div>
        );

    }
}

PostContainer.propTypes = {
    thing: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })),
    })
};

export default PostContainer;

// I need to abstract the array of comments from each object 
// that is passed to this child
// {
//     username: "philzcoffee",
//     thumbnailUrl: 'https://scontent-sjc2-1.cdninstagram.com/t51.2885-19/11201517_887808411287357_1307163552_a.jpg',
//     imageUrl: 'https://scontent-sjc2-1.cdninstagram.com/t51.2885-15/e35/20066915_1526002357431295_3266739979170086912_n.jpg',
//     likes: 400,
//     timestamp: "July 17th 2017, 12:42:40 pm",
//     comments: [
//         {
//             username: "philzcoffee",
//             text: "We've got more than just delicious coffees to offer at our shops!"
//         },
//         {
//             username: "biancasaurus",
//             text: "Looks delicious!"
//         },
//         {
//             username: "martinseludo",
//             text: "Can't wait to try it!"
//         }
//     ]
// },