import React from 'react';
import { CommentSection } from './CommentSection';
import postData from './application-data';
import Moment from 'react-moment';
import ModalPopup from './Modal'
import './PostContainer.css';

export default class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount = () => {
    this.setState({ posts: postData });
  };
  render() {
    const { posts } = this.state;
    return (
      <div className="container">
        <div className="content-wrapper">
          {posts.map((post, i) => {
            return (
              <article key={i}>
                <header className="head">
                  <div className="thumbnail">
                    <img alt="thumbnail" src={post.thumbnailUrl} />
                  </div>
                  <div className="username">
                    <a href="#">{post.username}</a>
                  </div>
                </header>
                <div className="image">
                  <img alt="" src={post.imageUrl} />
                </div>
                <section className="icons">
                  <a className="com-hea-wrapper" href="#">
                    <span className="comments-heart" />
                  </a>
                  <a className="com-cha-wrapper" href="#">
                    <span className="comments-chat-bubble" />
                  </a>
                </section>
                <section className="likes">
                  <a href="#">
                    {post.likes
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                    likes
                  </a>
                </section>
                <CommentSection comments={post.comments} />
                <div className="time-posted">
                  <a className="time-text" href="#">
                    <Moment parse="MMMM Do YYYY, hh:mm:ss A" fromNow>
                      {post.timestamp}
                    </Moment>
                  </a>
                </div>
                <section className="add-comment">
                  <form>
                    <textarea placeholder="Add a comment..." />
                  </form>
                  <div className="inappropriate">          
                    <ModalPopup />
                  </div>
                </section>
              </article>
            );
          })}
        </div>
      </div>
    );
  }
}