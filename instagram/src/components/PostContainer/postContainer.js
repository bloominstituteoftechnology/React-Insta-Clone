import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Input } from 'reactstrap';

const PostContainer = props => {
  return (
    <div className="posts_container">
      <Card className="post">
        <CardTitle className="post_userTitle">
          <img className="post_userThumbnail" src="https://instagram.fbna1-1.fna.fbcdn.net/vp/31c45306e6ca815b8c59940aed10cedc/5B2D3C88/t51.2885-19/11201517_887808411287357_1307163552_a.jpg" alt="User image of post"/>
          <div className="post_userName">Card title</div>
        </CardTitle>
        <CardImg top width="400px" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <div className="post_commentsContainer">
          <CardText className="post_comment">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          </div>
          <Input className="comment-create"/>
        </CardBody>
      </Card>
      <Card className="post">
        <CardTitle className="post_user">Card title</CardTitle>
        <CardImg top width="400px" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <div className="post_commentsContainer">
          <CardText className="post_comment">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          </div>
          <Input className="comment-create"/>
        </CardBody>
      </Card>
    </div>
  )
}

export default PostContainer;