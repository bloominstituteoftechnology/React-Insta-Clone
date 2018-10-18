import React from 'react';
import './likes.css';
import dummyData from '../../dummy-data';
import heartIcon from '../../Images/insta_heart.png';


class Likes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            likes: props.item.likes  
    } 
}    

    render() {
        return (
            <div className = 'likeSection'>
                <img className = "heartIcon" src = {heartIcon}/><br/>
                <p>{this.state.likes} likes</p>
    
            </div> 
                        
        
            
        )
    
    }
}
        
        






// addNewLike = event => {
//     event.preventDefault();
  
    
//  };


// changeHandler= event => {
//     console.log('event name', event.target.name);
//     console.log('event value', event.target.value);
//     this.setState({ like: event.target.value });
// };

export default Likes;