import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import styled from 'styled-components';

const Pstcnttctnr = styled.div`
  width: 80%;
  margin: 0 auto 25px auto;
`;

const Pfimg = styled.div`
  width: 45px;
  height: 40px;
  margin: 10px 0px 10px 10px;
  display: inline-block;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const Unt = styled.span`
  position: relative;
  top: -13px;
  left: 20px;
  margin: 5px;
`;

const Pstimg = styled.div`
  width: 100%;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Itractns = styled.div`
  width: 80px;
  height: 50px;
  margin-left: 10px;
  display: flex;
`;

const Lkbtn = styled.button`
  width: 80px;
  height: 50px;
  margin: 10px 0px;
  background-color: rgba(255,255,255,1);
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Lkbtnctnr = styled.div`
  width: 80px;
  height: 45px;
  text-align: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Cmtbtn = styled.button`
  width: 80px;
  height: 50px;
  margin: 10px 0px;
  background-color: rgba(255,255,255,1);
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Cmtbtnctnr = styled.div`
  width: 80px;
  height: 45px;
  text-align: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Lkct = styled.h4`
  margin-top: 15px;
  margin-left: 20px;
  font-size: 1.6rem;
`;

const Cmtfrm = styled.form`
  margin-top: 15px
`;

const Cmtfrmipt = styled.input`
  width: 60%;
  padding: 5px;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

const PostContent = props => {
  const click = (event) => {
    props.icrmtv(event.target.parentNode.parentNode.value);
}
 const commentSubmit = (event) => {
    event.preventDefault();
    props.adcmt(event);
    event.target.firstChild.value = "";
}
  return (
    <Pstcnttctnr>
      <Pfimg>
        <img src={props.thumbnailUrl} alt="user" />
      </Pfimg>
      <Unt>
        <strong>{props.username}</strong>
      </Unt>
      <Pstimg>
        <img src={props.imageUrl} alt="image" />
      </Pstimg>
      <Itractns>
        <Lkbtn onClick={click}
          value={props.ixct}>
          <Lkbtnctnr>
            <img
              src="https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-68-512.png"
              alt="like"
            />
            </Lkbtnctnr>
          </Lkbtn>
          <Cmtbtn>
          <Cmtbtnctnr>
            <img
              src="https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-69-512.png"
              alt="comment"
            />
            </Cmtbtnctnr>
           </Cmtbtn>
      </Itractns>
      <Lkct>{props.likes} likes</Lkct>
      <CommentSection comments={props.comments} />
      <div className="tmstp">
        <span>{props.timestamp}</span>
      </div>
      <Cmtfrm onSubmit={commentSubmit} id={props.ixct}>
        <Cmtfrmipt placeholder="Add a comment..." />
      </Cmtfrm>
    </Pstcnttctnr>
  );
};

export default PostContent;
