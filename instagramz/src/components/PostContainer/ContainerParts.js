import React from 'react';

import CardTop from './CardTop';

import PropTypes from 'prop-types';

import styled from 'styled-components';

const Divvy = styled.div`
    margin-bottom: 14px;
    border: solid lightgrey 1px;
    border-radius: 6px;
`;


function ContainerParts (props) {

    
    return(
        <Divvy>
            <CardTop
            name = {props.stuff.username} 
            thumb={props.stuff.thumbnailUrl}
            likes={props.stuff.likes}

            contenty={props.stuff.imageUrl} 
            comments={props.stuff.comments}
            textadd={props.textadd}
            changeIt={props.changeIt}
            addComment={props.addComment}
            />
            
            
        </Divvy>
    )
    
}

ContainerParts.propTypes = {
    stuff: PropTypes.object,
    textadd: PropTypes.string,
    changeIt: PropTypes.func,
    addComment: PropTypes.func
  }


export default ContainerParts;