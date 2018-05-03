import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

class PostContainer extends React.Component {
    constructor() {
      super();
    }
    postComment(index) {
      this.props.postComment(index);
    }

    gramCommentInput(e) {
      this.props.addComment(e);
    }
  
    
    render() {
      return (
        <div className="post-container">
  
          <div className="row">
            {this.props.Grams.map((Grams, index) => {
              return (
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                  < Card key={index} className="post-wrapper">
                  <section className="user-thumb">
                    <img src={instagram.thumbnailUrl} />
                    <CardTitle>{Grams.username}</CardTitle>
                  </section>
                  <section className="main-img">
                    <CardImg src={Grams.imageUrl} />
                  </section>
                  <div className="likes-comment">
                    <section className="likes">
                      <div>
                          <span onClick={() => this.props.pressLike(index)}><strong>&hearts; </strong></span>
                          <span><strong>&loz;</strong></span>
                      </div>
                      <div>
                        {Grams.likes} likes
                      </div>
                    </section>
                    <CommentSection
                      comments={Grams.comments}
                      />
                    <InputGroup>
                    <Input
                      onChange={(e) => this.handleCommentInput(e)}
                      value={this.props.commentInput}
                      type="text"
                      placeholder="Add Comment"
                      className="input-comment"
                    />
                    </InputGroup>
                    <Button color="secondary"
                      className="post-btn"
                      onClick={() => this.postComment(index)}
                    >
                      Post Comment
                      </Button>
                    </div>
                  </Card>
                </div>
                )
            })}
          </div>
  
        </div>
      )
    }
  
  }
export default PostContainer;