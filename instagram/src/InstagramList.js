import React from 'react';
import './InstagramList.css';

const InstagramList = (props) => {
    return (
        <div className="InstagramList">
            {props.postData.map((item) => {
                return(
                    <div className="InstagramList__item" key={item.id}>
                    <h3>{item.username}</h3>
                        <p>{item.text}</p>
                        </div>
                )
            })}
            </div>
    );
}

export default InstagramList;