import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const PostContainer = (props) => {
    return (
        <div className='postContainer'>
            <Card className='postCard'>
                <div>
                    {/* image is here for placeholder, will be replaced with adjustable image later */}
                    <CardTitle>palceholdercoffee</CardTitle>
                    <img className='postContainerAvatar' src='https://instagram.fbna1-1.fna.fbcdn.net/vp/31c45306e6ca815b8c59940aed10cedc/5B2D3C88/t51.2885-19/11201517_887808411287357_1307163552_a.jpg'/>
                    
                </div>
                <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> 

                <CardBody>
                    {/* Comment Component should go here when ready */}
                </CardBody>
            </Card>
        </div>
    );
};

export default PostContainer;