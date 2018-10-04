import React from 'react';
import styled from 'styled-components';

const Far = styled.i`
    font-size: 30px;
    font-weight: 100;
    margin: 5px 10px;
    -webkit-text-stroke: 1px white;
`;

const LikesSection = props => {
    return ( 
        <div>
            <div className="right-feedback">
                <Far className="far fa-heart" />
                <Far className="far fa-comment" />
                <Far className="far fa-paper-plane" />
            </div>
            <div className="left-feedback">
                <Far className="far fa-bookmark" />
            </div>
            <div>
                <p>{props.likes} likes</p>
            </div>
        </div>
    );

}

export default LikesSection;