import React from 'react';
import './likes.css';
import dummyData from '../../dummy-data';


class Likes extends React.Component {
    constructor(props){
        super(props);
        this.state = dummyData  
    }    

    render() {
        return (
            <div className = 'likeSection'>
                {dummyData.map((info, index)=>{
                    return (
                        <div key = {index}>
                            <div>
                                <img src = '../insta_heart.png'/>
                            </div>
                            <p className = 'likes'> {info.likes} likes</p>
                        </div>
                    )
                })}
    
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