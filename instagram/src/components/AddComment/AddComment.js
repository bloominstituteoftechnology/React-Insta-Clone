import React, { Component } from 'react';

class AddComment extends Component {
    constructor() {
        super();

        this.state = {
            newComment: '',
        }
    }

    handleNewComment = (event) => {
        this.setState({newComment: event.target.value });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addNewComment(this.state.newComment);
        this.setState({newComment: ''});
    }

    render() {
        return(
            <div className={'row'}>
                <div className={'col'}>
                    <form onSubmit={this.handleFormSubmit}>
                        <input onChange={this.handleNewComment} placeholder='Comment Here!' value={this.state.newComment} />
                    </form>
                </div>
            </div>
        );
    };

};

export default AddComment;