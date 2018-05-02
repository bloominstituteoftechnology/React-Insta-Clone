import React, { Component } from 'react';
import './PostContainer.css';

const socData = [
  {
    logo: "https://ibin.co/3whrpKSBbZ81.png",
    name: "Lambda School",
    handle: "@LambdaSchool",
    date: "26 jan",
    text: "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!",
    well: {
      img: "https://ibin.co/3wnC6SgIOJud.png",
      header: "Get started with React",
      text: "React makes it painless to create interactive UIs. Design simple views for each state in your application.",
      url: "reactjs.org",
    },
  }
];

const BodyHeader = () => {
  return (
    <div class="body-header">
      <h6>{socData[0].name}</h6>
      <span>{socData[0].handle}</span>
      <span>{socData[0].date}</span>
    </div>
  );
};

const Well = () => {
  return (
    <div>
      <img className="img-fluid rounded-top" src={socData[0].well.img} alt="Well Image" />
      <div className="rounded-bottom well-bottom">
        <h6>{socData[0].well.header}</h6>
        <p>{socData[0].well.text}</p>
        <p>{socData[0].well.url}</p>
      </div>
    </div>
  );
}

const CardBody = () => {
  return (
    <div>
      <BodyHeader />
      <p>{socData[0].text}</p>
      <Well />
    </div>
  );
}

const CardLogo = (props) => {
  console.log("Card Logo Props", props);
  return <img className="logo-img" src={props.data.thumbnailUrl} alt="Logo" />;
};

class PostContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="container PostContainer">
      <div className="row">
        <div className="col-2">
          <CardLogo data={this.props.data} />
        </div>
        <div className="col-10">
          <CardBody />
        </div>
      </div>
    </div>
    );
  }
}

{/* <div className="container PostContainer">
<div className="row">
  <div className="col-2">
    <CardLogo data={this.props.data} />
  </div>
  <div className="col-10">
    <CardBody />
  </div>
</div>
</div> */}

export default PostContainer;