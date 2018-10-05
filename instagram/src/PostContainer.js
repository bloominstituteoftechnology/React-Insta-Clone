import React from 'react';
import './PostContainer.css';
const PostContainer = (props) => {
    return (
    <section>
    <div className='top'>
    <img src="https://pbs.twimg.com/profile_images/641353910561566720/VSxsyxs7_400x400.jpg" alt=""/>
    <h2> LeviApp </h2>
    </div>

    <img id='postImg' src="https://www.sdu.dk/-/media/images/om_sdu/institutter/ikbm/billeder+bio/colourbox1532741ny.jpg?h=1443&la=en&w=2598&hash=45B5DB8F1BDDFA1A991B337CDC37AB9407F15C09" alt=""/>

    <div className='comment'>
    <div>
    <img src="https://images.vexels.com/media/users/3/147091/isolated/preview/5f8a1ea9c90ceed8d92999bc824417eb-instagram-heart-icon-by-vexels.png" alt=""/>
    <img src="https://www.tryviews.com/wp-content/uploads/2017/09/Buy-Instagram-Custom-Comments.png" alt=""/>

    </div>
    <h2> 0 Likes </h2>    
    <span> <h2>CrazyOne</h2> This is awesome!</span>
    <form>
        <input value={props.value} onChange={props.inputHandler}></input>
    </form>

    </div>

    </section>
    )
}

export default PostContainer;