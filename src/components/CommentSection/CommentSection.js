import React, { Component } from 'react';
import './CommentSection.css'

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = this.props;

    }
    handleNewItem = event => {
        this.setState({ comment: event.target.value })
    }

    handleItemSubmition = () => {
        // console.log(this.state)
        let comments = this.state.comments;
        comments.push({ text: [this.state.comment], username: 'Nando' })
        this.setState({ comment: '' })
    }

    componentDidMount() {
        let newState = this.props;
        this.setState({ newState, comment: '' })
    }

    render() {
        return (
            <div className="wellDiv">
                <h6>{this.props.likes} likes</h6>
                {this.props.comments.map((element, i) => {
                    return <div key={i}><h6>{element.username}</h6>  {element.text}</div>
                })}
                <p className="time">{this.props.time}</p>
                <div className="line"></div>
                <input
                    name="comment" // should be known as the state.value of the thing we update
                    onChange={this.handleNewItem}
                    value={this.state.comment} // should be bound to the state.value of thing we update
                    placeHolder="Add a comment..."
                />
                <i onClick={this.handleItemSubmition} class="fas fa-ellipsis-h"></i>
            </div>
        );
    }
}

export default CommentSection;