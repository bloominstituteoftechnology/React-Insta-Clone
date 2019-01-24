import React from 'react'

const LikesPost = (props) => {
    let btn_class = ' comment-icons far fa-heart fa-2x';
    if(props.liked === true ) {
        btn_class = 'heart-icon far fa-heart fa-2x'
    }
   
    const Doboth = () => {
        props.changeColor();
        props.increment();
    }
    return (
        <div>
            < div className='likes'>
                {/* <i onClick={props.increment} className="far fa-heart fa-2x" ></i> */}
                <i onClick={Doboth} className={btn_class} ></i>
                <i className="far fa-comment fa-2x comment-icons"></i>
                <h4> {props.likes} likes </h4>
            </div> 
        </div>
    )
}

export default LikesPost