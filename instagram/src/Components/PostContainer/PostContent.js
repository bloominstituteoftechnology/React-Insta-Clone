lass PostHeader extends React.Component {

    render() {

        return(
            <div key={this.props.timestamp}>
                {this.props.dummyData.map(postProps => {
                    return (
                        <div className={"postWrap"}>
                            <div>
                            <img className={"thumbImg"} src={postProps.thumbnailUrl}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }



}


export default PostHeader;