import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const PostContainer = (props) => {
    return (
        <div className='postContainer'>
            <Card className='postCard'>
                <div className='postContainerHeader'>
                    {/* image is here for placeholder, will be replaced with adjustable image later */}
                   
                    <img className='postContainerAvatar' src='https://instagram.fbna1-1.fna.fbcdn.net/vp/31c45306e6ca815b8c59940aed10cedc/5B2D3C88/t51.2885-19/11201517_887808411287357_1307163552_a.jpg'/>
                    <h5 className='postContainerAvatarText'>PlaceHolderCoffee</h5>
                </div>
                <CardImg className='postContainerImage'src="https://instagram.fbna1-1.fna.fbcdn.net/vp/557a29d3526bc7f813c2a784d82de7d3/5B4E3E05/t51.2885-15/e35/26065916_2007800899433580_5879937492399947776_n.jpg" alt="Card image cap" /> 

                <CardBody>
                    {/* Comment Component should go here when ready */}
                </CardBody>
            </Card>
        </div>
    );
};

export default PostContainer;