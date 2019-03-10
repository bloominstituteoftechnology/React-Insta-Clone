import React from 'react';
import CommentSection from './CommentSection/CommentSection';


const PostContainer = (props) => {
    return(
        <div className='card' data-id={props.obj.timestamp}>
            <section className='top' > {/*User photo and name*/}
                <img className='user-photo'  src={props.obj.thumbnailUrl} alt=""/>
                <h2>{props.obj.username}</h2> 
            </section>
            <section className='mid'>{/*Post pic*/}
                <img src={props.obj.imageUrl} alt=''></img>
            </section>
            <section className='bottom'>{/*Like Comment and Bookmark icons and comments*/}
                <CommentSection  obj={props.obj} />
            </section>
            
        </div>
        
           
    )
}

export default PostContainer