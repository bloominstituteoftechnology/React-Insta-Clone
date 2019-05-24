import React from 'react';
import {Image} from '../Styled/Styled'

const ActionsContainer = props => {
    return (
        <div>
            <Image alt='circle' src={require('../../static/img/circle.png')}></Image>
            <Image alt='like' marginL30 src={require('../../static/img/heart.png')}></Image>
            <Image alt='person' marginL30 onClick={props.logout} src={require('../../static/img/person.png')}></Image>
        </div>
    )
}
export default ActionsContainer;