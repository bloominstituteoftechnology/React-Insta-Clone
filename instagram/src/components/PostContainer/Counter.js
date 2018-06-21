import React from 'react';
import styled from 'styled-components';
import {LikesPostImg, DisplayLikes, Ptags} from '../Styles/Reusables';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            likeState: props.counterState.likes
         }
         console.log('counter props: ', props)
    }
    addOne = () => {
        let thisLike = this.state.likeState +1;
        this.setState({ likeState: thisLike })
    }
    render() { 
        return ( 
            <LikesPostImg>
                <DisplayLikes>
                    <Ptags><span className='red'  onClick={this.addOne}><i className="fa fa-heart-o"></i></span></Ptags>
                    <Ptags><i className="fa fa-comment-o" aria-hidden="true"></i></Ptags>
                </DisplayLikes>
                <div>
                    <span>{this.state.likeState}</span> likes
                </div>
            </LikesPostImg>
         )
    }
}
 
export default Counter;
   