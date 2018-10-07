import React, { Component } from 'react';
import Card from './Card.js';

class PostContainer extends Component {
    render() {
        
        return(
            <div className='post-container'>
             {this.props.cards.map((card,index) => {
                 return(
                     <Card key={index} card={card} className="card" />
                 );
             } )}
            </div>
        );
    }
}

export default PostContainer;
