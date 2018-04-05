import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Input } from 'reactstrap';
import CommentSection from '../CommentSection/commentSection';

const PostContainer = props => {
  return (
    <div className="posts_container">
      <Card className="post">
        <CardTitle className="post_userTitle">
          <img className="post_userThumbnail" src="https://instagram.fbna1-1.fna.fbcdn.net/vp/31c45306e6ca815b8c59940aed10cedc/5B2D3C88/t51.2885-19/11201517_887808411287357_1307163552_a.jpg" alt="User image of post"/>
          <div className="post_userName">Card title</div>
        </CardTitle>
        <CardImg className="post_image" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CommentSection />
        </CardBody>
      </Card>
    </div>
  )
}

export default PostContainer;