import React from 'react'
import './Post.css'

function CardContent (props){
    return (
        <div clasName="cardContent">
        <img src={props.content} />
        </div>
    )
}

export default CardContent