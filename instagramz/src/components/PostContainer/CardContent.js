import React from 'react';
import image5 from '../SearchBar/Image5.jpg';



class CardContent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            likes: props.likes,
            liked: false
        }
    }
    
    

    updateLikes = event => {
        event.preventDefault();
        
        

        if(this.state.liked === true ){
            const likeable = this.props.likes;    
            this.setState(
                {
                    likes: likeable,
                    liked: false
                }
            )
        }
        else {
            const likeable = this.props.likes;
            this.setState(
                {
                    likes: likeable+1,
                    liked: true
                }
            )

        }
        
    };

    

    render() {
    return(
        
    
        <div>
            <div>
                <img className="image2" src={this.props.contenty} alt=""></img>
            </div>

            <div className='imageThing' >
                <div>    
                    <img onClick={this.updateLikes} src={image5} alt=""></img>
                    {this.state.likes} likes
                </div>
            </div>
        </div>
    )
    }
}


export default CardContent;