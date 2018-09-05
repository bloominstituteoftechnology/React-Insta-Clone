import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import moment from 'moment';

import './PostContainer.css';

import PropTypes from 'prop-types';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.data,
        };
    }

    componentDidMount() {
        // when the component first mounts, look through the localStorage for
        // any locally stored info about its previous state, and if it exists (i.e. !== null), then
        // copy that state info onto its current state
        if (typeof(Storage) !== 'undefined') {
            if (localStorage.getItem(`postContainerState-${ this.props.index }`) !== null) {
                let newState = JSON.parse(localStorage.getItem(`postContainerState-${ this.props.index }`));

                this.setState(newState);
            }
        }
    }

    componentDidUpdate() {
        // every time the component updates, make a copy of its state (in JSON format) in
        // your local storage
        if (typeof(Storage) !== 'undefined') {
            localStorage.setItem(`postContainerState-${ this.props.index }`, JSON.stringify(this.state));
        }
    }

    static getDerivedStateFromProps(props, state) {
        // every time the component gets updated props from its parent,
        // check to see if the hidden part of the data object in its state matches
        // the hidden part of the data object in the updated props. If they don't
        // match, then make the value of the current state's hidden match the value
        // of the props' hidden and return the new state.
        if (props.data.hidden !== state.data.hidden) {
            let newState = state;
            newState.data.hidden = props.data.hidden;

            return newState;
        }

        return null;
    }

    addNewComment = e => {
        // addNewComment will push onto the current state's comments array a
        // new object representing a new comment which will have a hardcoded username and
        // a text value equal to the value of the input field in the form. Then
        // copy a newState with the new comment on it onto the current state and
        // reset the input field's value to an empty string.
        e.preventDefault();

        let newComments = this.state.data;

        newComments.comments.push({
            username: this.props.username,
            text: e.target[0].value,
        });

        this.setState({
            data: newComments,
        })

        e.target[0].value = "";
    }

    deleteComment = index => e => {
        // deleteComment will take the index value of the comment you want to
        // delete and splice it out of the comments array in your state.
        e.preventDefault();
        let newState = this.state;
        newState.data.comments.splice(index, 1);

        this.setState(newState);
    }

    handleLike = () => {
        // handleLike will increase by 1 the likes number stored in this.state.data
        let newData = this.state.data;
        newData.likes++;
    
        this.setState({
          data: newData,
        });
    }

    render() {
        // This timestamp variable was used because the dummy-data.js file has the timestamp on it 
        // written in a non-standard format and the moment library wouldn't accept it.
        // Note: This will soon be deprecated in moment and you will need to write your dates in
        // a standard format from then on.
        const timestamp = this.state.data.timestamp.substring(0, this.state.data.timestamp.indexOf(',') - 7) + this.state.data.timestamp.substring(this.state.data.timestamp.indexOf(',') - 5);

        if (this.state.data.hidden === true) {
            return (
                null
            )
        } else {
            return (
                <section className = 'post-container-section'>
                    <div className = 'post-container-div'>
                        <div className = 'title-div'>
                            <img 
                                className = 'thumbnail-url' 
                                src = { this.state.data.thumbnailUrl } 
                                alt = 'thumbnail url' 
                            />
                            <h4>{ this.state.data.username }</h4>
                        </div>

                        <img 
                            className = 'image-url' 
                            src = { this.state.data.imageUrl } 
                            alt = 'main url' />

                        <div className = 'likes-div'>
                            <i 
                                className = 'far fa-heart' 
                                onClick = { this.handleLike } 
                            ></i>
                            <i className="far fa-comment"></i>
                            <h4>{ this.state.data.likes } likes</h4>
                        </div>

                        { this.state.data.comments.map((comment, index) => {
                                return <CommentSection 
                                    className = 'comment-section-div' 
                                    key = { index } 
                                    index = { index } 
                                    comment = { comment } 
                                    deleteComment = { this.deleteComment } 
                                />
                            }) 
                        }

                        <div className = 'timestamp-div'>
                            <span>{ moment(timestamp).fromNow().toLocaleUpperCase() }</span>
                        </div>

                        <div className = 'add-a-comment-div'>
                            <form onSubmit = { this.addNewComment }>
                                <input 
                                    type = 'text' 
                                    className = 'add-a-comment-input' 
                                    placeholder = 'Add a comment...' 
                                />
                                <button type = 'submit'><i  
                                    className = 'fas fa-ellipsis-h' 
                                ></i></button>
                            </form>
                        </div>
                    </div>
                </section>
            );
        }
    }
}

PostContainer.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string,
        })),
    }),
}

export default PostContainer;
