import React from 'react';
import './InstagramList.css';


const InstagramList = (props) => {
    return (
        <div className="InstagramList">
            {props.postData.map((item) => {
                // const com = {item:item.comments};
                return(
                    <div className="InstagramList__item" key={item.id}>
                        <div className="InstagramList__item__topWrapper">
                            <img className="InstagramList__item__topWrapper__thumbnail" src= {item.thumbnailUrl} alt={item.username}></img>
                            <h3>{item.username}</h3>
                    </div>
                        <img className="InstagramList__item__mainImages" src= {item.imageUrl} alt={item.username}></img>
                        <div className="InstagramList__item__bottomSection">
                        <div className="InstagramList__item__bottomSection__likes">{item.likes} likes</div>
                        <img src="./images/icons.png"></img>
                        {/* <ul>
                        {this.props.com.map(function(listValue){
                          return <li>{listValue}</li>;
                        })}
                      </ul> */}
                        </div>
                    </div>
                )
            })}
            </div>
    );
}

export default InstagramList;