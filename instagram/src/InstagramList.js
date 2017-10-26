import React from 'react';
import './InstagramList.css';

const InstagramList = (props) => {
    return (
        <div className="InstagramList">
            {props.postData.map((item) => {
                return(
                    <div className="InstagramList__item" key={item.id}>
                    <h3>{item.username}</h3>
                        <img className="InstagramList__item__mainImages" src= {item.imageUrl} alt={item.username}></img>
                        <div className="InstagramList__item__bottomSection">
                        <div className="InstagramList__item__bottomSection__likes">{item.likes}</div>
                        <img src="./images/icons.png"></img>
                        {/* {let length = {item.comments.length};
                        for(let i = 0; i < length; i++){
                        } */}
                        </div>
                    </div>
                )
            })}
            </div>
    );
}

export default InstagramList;