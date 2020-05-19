import React, { Component } from 'react';
import MainVideoDetails from './MainVideoDetails';

class VideoComments extends Component {
    state = {  }
    render() { 
        return <div className="comment__container">
                    <span className="comment__pic"></span>
                    <h3 className="comment__username">{this.props.userName}</h3>
                    <div className="date-fix">
                    <p className="comment__date">{this.props.date}</p>
                    </div>
                    <p className="comment__message">{this.props.comment}</p>
               </div>;
    }
}
 
export default VideoComments;


