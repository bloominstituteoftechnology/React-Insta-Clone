import React, { Component } from 'react';
import styled from 'styled-components';


const PostWrap = styled.div`

    > postheader {
        display: flex;
        align-items: center;
        padding-top: 5px;
        padding-bottom: 5px;
        font-size: 1.6rem;
        font-weight: bold;

        > thumbnail {
            > img {
                width: 30px;
                margin-left: 15px;
                margin-right: 15px;
                border-radius: 50%;
            }
        }
    }

    > postbody {
        > commenticons {
        display: flex;
        max-width: 75px;
        justify-content: space-between;
        }
        > likes {
            font-size: 1.2rem;
        }
    }

`

class Post extends Component {
    
    render() { 
        return ( 
            <PostWrap>
                <postheader>
                    <thumbnail>
                    <img src={this.props.thumbnailUrl} alt=""></img>
                    </thumbnail>
                    {this.props.username}
                </postheader>
                
                <postbody>
                    <img src={this.props.imageUrl} alt="" />
                        <commenticons>
                            <i className="far fa-heart fa-3x" onClick={this.props.increaseLike}></i>
                            <i className="far fa-comment fa-flip-horizontal fa-3x"></i>
                        </commenticons>
                        <likes>{this.props.likes} likes</likes>
                </postbody>
                
            </PostWrap>
         );
    }
}
 
export default Post;