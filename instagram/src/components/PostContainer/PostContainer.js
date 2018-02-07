import React from "react";
import dummyData from "../../dummy-data";
import CommentSection from "../CommentSection/CommentSection";

class PostContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                {dummyData.map(post => (
                    <div>
                        <div className="post-header">
                            <img src={post.thumbnailUrl} width={40} height={40} />
                            <label className="post-username">
                                {post.username}
                            </label>
                        </div>
                        <div className="dummy-post">
                            <img src={post.imageUrl} width={500} height={500} />
                            <div> Likes: {post.likes}</div>
                        </div>
                        <CommentSection comments={post.comments} />
                    </div>
                ))}
            </div>
        );
    }
}

/*

return (
      <div>
        {dummyData.map(function(post) {
          return (
            <div>
              <div className="post-header">
                <img src={post.thumbnailUrl}/>
                <label className="post-username">
                  {post.username}
                </label>
              </div>
              <div className="dummy-post">
                <img src={post.imageUrl}/>
              </div>
              <CommentSection comments={post.comments}/>
            </div>
          )
        }}
      </div>
    );

* */

export default PostContainer;