import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default class Likes extends Component {
    constructor(props){
        super(props)
        this.state = {
            likes: ''
        }
        
        this.addLike = this.addLike.bind(this);
    }
    
    componentDidMount() {
        this.setState({likes: this.props.likes})
    }

    addLike () {
        this.state.likes++;
        this.setState({likes: this.state.likes});
      }

    render() {
        return (
            <div className="icons"> 
                <FontAwesome name="heart-o" size='2x' onClick={this.addLike} value={this.state.comment}/>
                <FontAwesome name="comment-o" size='2x' />
                <div>{this.state.likes}</div>
            </div>
            
        )
    }
}