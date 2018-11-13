import React from 'react'
import './Post.css'
import Styled from 'styled-components' 

const UserName = Styled.p`
    font-weight: bold;
`

function CardBanner (props){
    return (
        <div className="cardBanner">
            <img src='https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg' alt="userICon"/>
            <UserName>philzcoffee</UserName>
        </div>
    )
}

export default CardBanner