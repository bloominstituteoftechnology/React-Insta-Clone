import React from 'react';

class PostHeader extends React.Component {

    render() {

        return(
            <div key={this.props.timestamp}>
                {this.props.dummyData.map(postProps => {
                    return (
                        <div className={"postWrap"}>
                            <div>
                            <img className={"thumbImg"} src={postProps.thumbnailUrl} alt={"profile pic"}/>
                            <h4>{postProps.username}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }



}


export default PostHeader;