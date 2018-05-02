import React, { Component } from 'react';
import './PostContainer.css'

class PostContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("props", this.props)
        return (
            <div className="container socialCard">
            <div className="row">
                <div className="col-12 d-flex">
                    <CardLogo url={this.props.data.thumbnailUrl} />
                    {/* <CardBody /> */}
                </div>
            </div>
        </div>
        );
    }
}

const socData = [
    {
        logo: "",
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

const CardLogo = props => {
    console.log(props)
    return <img className="thumbnail rounded-circle" src={props.url} alt="User Thumbnail" />;
};

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

export default PostContainer;