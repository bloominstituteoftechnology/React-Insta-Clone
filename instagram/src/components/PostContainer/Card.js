import React, { Component } from 'react';
import CardHeader from './CardHeader';

class Card extends Component {
     
    render() {
        console.log(this.props.card.username);
        return (
            <div className="card">
               <CardHeader username={this.props.card.username} thumbnail ={this.props.card.thumbnailUrl} />
               <img className='main-img' src={this.props.card.imageUrl} alt="main-image" />

            </div>
        );
    }
}

export default Card;
