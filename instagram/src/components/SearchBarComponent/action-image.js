import React from 'react';
import './search-bar.css'
import MaterialIcon from 'material-icons-react';
import Styled from 'styled-components' 

const ActionButtons = Styled.div`
    display: flex;
    width: 15%;
    justify-content: space-between;
    padding: 4px;
`

function Actions (props){
    return (
        <ActionButtons>
            <MaterialIcon icon="explore" inactive />
            <MaterialIcon icon="favorite_border" inactive />
            <MaterialIcon icon="person" inactive />
        </ActionButtons>
    )
}

export default Actions