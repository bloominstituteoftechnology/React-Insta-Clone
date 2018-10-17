import React from 'react';
import './likes.css';
import dummyData from '../../dummy-data';


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
                <img src = '../../Images/insta_heart.png'/>
               {this.state.likes} likes
    
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