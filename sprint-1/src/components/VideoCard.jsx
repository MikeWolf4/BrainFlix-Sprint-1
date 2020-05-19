import React, { Component } from 'react';
import VideoList from './VideoList';

class VideoCard extends Component {
    state = {  }
    render() { 
        return <div>
            <div className="videocard">
                <div className="videocard__img-container">
                <img className="videocard__img" src={require( "../assets/Images/" + this.props.videoImage )} alt="video thumbnail"/>
                </div>
                {console.log(this.props.videoImage)}
                <div className="videocard__channel-title-container">
                    <h4 className="videocard__title">{this.props.videoTitle}</h4>
                    <h4 className="videocard__channel">{this.props.videoChannel}</h4>
                </div>
            </div>
                
        </div>;
    }
}
 
export default VideoCard ;
