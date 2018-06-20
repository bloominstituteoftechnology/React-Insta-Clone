import React from 'react';

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
            <div className='likesPostImg'>
                <div>
                    <span className='red'  onClick={this.addOne}><i className="fa fa-heart-o"></i></span>
                    <i className="fa fa-comment-o" aria-hidden="true"></i>
                </div>
                <div>
                    <span className='count'>{this.state.likeState}</span> likes
                </div>
            </div>
         )
    }
}
 
export default Counter;
   