import './Post.css';

const Post = props => {
    return (
        <Card>
            <CardBody>
                <Row>
                    <img
                        style={{ borderRadius: 90 }}
                        className="img-thumbnail"
                        src={props.post.thumbnailUrl}
                        alt=""
                    />
                    <CardSubtitle className="cardSubtitle">
                        {props.post.username}
                    </CardSubtitle>
                </Row>
            </CardBody>
            <CardImg className="Post__image" src={props.post.imageUrl} alt="" />
            <CardBody>
                <CardText>
                    <div>{}
    )
}