import React from 'react';
import './ActionsContainer.css';

const ActionsContainer = props => {
    return (
        <div>
            <img alt='circle' className='action-icons' src={require('../../static/img/circle.png')}></img>
            <img alt='like' className='action-icons action-heart' src={require('../../static/img/heart.png')}></img>
            <img alt='person' onClick={props.logout} className='action-icons action-person' src={require('../../static/img/person.png')}></img>
        </div>
    )
}
export default ActionsContainer;