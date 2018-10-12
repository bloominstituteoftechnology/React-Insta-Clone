import React, { Component } from 'react';
import './PostContainer.css';
class CardHeader extends Component {
    render() {
      
        return (
            <div className='header'>
               <img src={this.props.thumbnail} alt='thumbnail' />
               <p>{this.props.username}</p> 
            </div>
        );
    }
}

export default CardHeader;
