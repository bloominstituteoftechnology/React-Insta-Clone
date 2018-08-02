import React from 'react';
import './search-bar.css'
import MaterialIcon from 'material-icons-react'
import Styled from 'styled-components' 

const Input = Styled.input`
    text-align: center;
    height: 100%;
    width: 16em;
    font-size: 15px;
`

function Search (props){
    return (
        <div>
            <form onSubmit={props.onClick}>
            <Input type="text" placeholder="🔍 Search" onChange={props.inputChange}/>
            </form>
        </div>
    )
}

export default Search