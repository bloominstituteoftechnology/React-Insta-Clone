import styled from "styled-components";

export const StyledDiv = styled.div`

${props =>
  props.post
    ? `
border-radius: 3px;
border: 1px solid #e6e6e6;
background-color: #fff;
margin-bottom: 60px;
margin-left: 20%;
margin-right: 20%;
`
    : null}

${props =>
  props.postHead
    ? `
display: flex;
padding: 16px;
align-items: center;
`
    : null}



${props =>
  props.postHeadAvatar
    ? `
width: 30px;
height: 30px;
`
    : null}


${props =>
  props.postNickname
    ? `
margin-left: 12px;
font-family: "PT Sans", sans-serif;
font-weight: bold;
`
    : null}



${props =>
  props.postImageBg
    ? `
background-color: #efefef;
`
    : null}



${props =>
  props.postIcons
    ? ` 
display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px;
`
    : null}

${props =>
  props.leftIcons
    ? `
display: flex;
`
    : null}
    ${props =>
      props.centerFlex
        ? `
      display: flex;
      justify-content: center;
      `
        : null}
${props =>
  props.commentSection
    ? `
          display: flex;
          flex-direction: row;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
            Arial, sans-serif;
          font-size: 14px;
          line-height: 18px;
          width: 95%;
          margin: 0 auto;
          padding: 5px 5px;
      `
    : null}

          ${props =>
            props.commentText
              ? `
              padding-left: 10px;
              text-align: left;
          `
              : null}

         


`;

export const StyledInput = styled.input`
  ${props =>
    props.commentAddInput
      ? `
      width: 95%;
      margin: 2% auto;
      border: none;
      justify-content: center;
      border-top: 1px solid lightgrey;
      height: 40px;
  `
      : null};
`;

export const StyledImg = styled.img`
  ${props =>
    props.avatarImg
      ? `
      width: 100%;
      height: 100%;
      border-radius: 50%;
  `
      : null};

  ${props =>
    props.postImg
      ? `
        display: block;
        width: 100%;
        height: 100%;
      `
      : null};
`;
