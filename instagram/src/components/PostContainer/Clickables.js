import React from 'react';
import gramheart from '../../logos/gramheart.jpg';
import gramcomment from '../../logos/gramcomment.jpg'

function Clickables(props) {
    return <div>
        <div className="likeButton">
        <img src={gramheart} alt='comment' height='30' width= '30' />
            {/* <img src={require('./gramheart.jpg')} alt='gramHeart'/> */}
        <img src={gramcomment} alt='gramComment' height='30' width= '30' />
        </div>
    <div className='likeCounter'>{props.likes}</div>
    </div>
}

export default Clickables;