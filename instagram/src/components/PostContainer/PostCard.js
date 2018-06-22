import React from 'react' ;
import './post-container.css' ;
import CommentContainer from '../CommentSection/CommentContainer';
import Heart from '../Heart/Heart'
import blueCheckImgGimp2626 from '../../logos/blueCheckImgGimp2626.png' ;
import logoImgGimp5050 from '../../logos/logoImgGimp5050.png'



class PostCard extends React.Component {
    // console.log(props.post.username);
    constructor(props) {
        super(props) ;
        this.state = {
            likes: props.post.likes
        }
    }
    dontHeartSocialMedia = () => {
        let likes = this.state.likes + 1 ;
        this.setState({ likes })
    }
    render() {
        return(
            <div className="post-card-wrapper">
            <div className="post-content">
                <header className="post-header">
                    
                    <div className="post-user-thumb">
                        
                        <img 
                        src={this.props.post.thumbnailUrl} 
                        alt=""
                        />
                    </div>
                    <div className="post-username">

                        {this.props.post.username}
                        <img src={blueCheckImgGimp2626} alt="check"/>

                        
                    
                    </div>
                    {/* <img src={logoImgGimp5050} alt="" claasName="logo" /> */}


                </header>
                <div className="post-img">

                    <img 
                    src={this.props.post.imageUrl} 
                    alt=""
                    />

                </div>
                <div className="post-bottom">
                    <div className="likes">
                        {/*PASSING PROPS THRU STYLED COMPONENTS!!!*/}
                        <Heart                             
                            dontHeartSocialMedia={this.dontHeartSocialMedia}
                            brokenHearts={this.state.likes}
                        />
                        {/* Likes: {this.props.post.likes} */}

                    </div>


                    <CommentContainer 
                    postDefaultComments={this.props.post.comments}
                    postId={this.props.post.imageUrl}
                    />
                    {/* {console.log(props.post.comments)} */}


                </div>
            </div>
            </div>
        )
    }
}
export default PostCard ;