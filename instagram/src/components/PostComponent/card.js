import React from 'react'
import './Post.css';
import CardBanner from './cardBanner';
import CommentSection from './CommentComponent/CommentSection';
import CardContent from './cardContent'

function Card (props){
    return (
        <div className='Card'>
            <CardBanner imgSrc={props.usrImg} userName={props.userName} />
            <CardContent content={props.imageUrl}/>
            <CommentSection />
        </div>
    )
}

export default Card