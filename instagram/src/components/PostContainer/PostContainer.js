import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle,
  Media
} from "reactstrap";
// import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  return (
    <div>
      <Card>
        <CardHeader>
          {" "}
          <Media>
            <Media left href="#">
              <Media
                object
                data-src="holder.js/64x64"
                alt="Generic placeholder image"
              />
            </Media>
            <Media>
              <strong>Ricky Bobby</strong>
            </Media>
          </Media>
        </CardHeader>
        <CardImg
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>
            <i class="far fa-heart" />
            <i class="far fa-comment" />
          </CardTitle>
          <CardSubtitle>500 likes</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
        {/* <CommentSection /> */}
      </Card>
    </div>
  );
};

export default PostContainer;
