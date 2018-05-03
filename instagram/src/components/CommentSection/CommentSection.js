import React from 'react';


// The CommentSection component will receive the array of comments as props and render each one with the username of the poster as well as the post's text. Additionally, there should be an input box that allows users to submit a new comment for any post. Since there is no login page or anything of that sort, hard code a static username.

class CommentSection extends React.Component {
    constructor() {
        super();

        }

        render() {
            return (
              <div>
                {this.props.instaFeed.map((post, index) => {
                  return (
                    <div key={index}>
                      <p ><strong>{post.username} </strong>{post.text}</p>
                    </div>
                    )
                })}
              </div>
            )
          }
    }





export default CommentSection;