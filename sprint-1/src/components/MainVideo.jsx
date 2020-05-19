import React, { Component } from 'react';
import thumbnail from "../assets/Images/video-list-0.jpg";
import MainVideoDetails from './MainVideoDetails';
import VideoComments from './VideoComments';
import VideoZed from "../assets/Video/BrainStation Sample Video.mp4"


class MainVideo extends Component {
    state = { 
    }

    render() { 
        return (
                  <div>
                    <div className="mainvideo-container">
                    <div className="mainvideo">
                      <video   src={VideoZed} type="video/mp4" className="video" poster={(thumbnail)}>
                      </video>
                        <div className="video-player__controls">
                          <div className="video-player__btn">
                            <img src={require("../assets/Icons/SVG/Icon-play.svg")} alt=""/>
                          </div>
                          <div className="video-player__progress-bar">
                            <div className="video-player__progress-timeline">
                              <div className="video-player__progress-scrubber"></div>
                            </div>
                            
                            <div className="video-player__progress-text">0:00 / {this.props.videoDetails.duration}</div>
                          </div>
                          <div className="video-player__btn-group">
                            <button className="video-player__btn">
                              <img className="fas fa-expand" src={require("../assets/Icons/SVG/Icon-fullscreen.svg")} alt=""/>
                            </button>
                            <button className="video-player__btn"> 
                              <img className="fas fa-expand" src={require("../assets/Icons/SVG/Icon-volume.svg")} alt=""/>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <MainVideoDetails videoDetails={this.props.videoDetails} />
              <div className="comment__section">
                  <div className="test__group">
                      <h3 className="h1sect">Comments {Object.keys(this.props.videoComments).length}</h3>
        
                      <form id="comment-form" className="comment-form">
                        {/* <label className="input1" htmlFor="input">NAME</label>
                        <input
                        type="text"
                        id="input-name"
                        className="input__name"
                        name="userNameInput"
                        placeholder="Name"
                        maxLength="18"
                        /> */}
                        <span className="input__pic"></span>
                        
                        <label className="input2" htmlFor="input">JOIN THE CONVERSATION</label>
                        
                        <textarea
                        type="text"
                        id="input-comment"
                        className="input__comment"
                        name="userCommentInput"
                        placeholder="Add a new comment"
                        maxLength="210"
                        >
                        </textarea>
                        
                        <button className="input__button" type="submit">COMMENT</button>
                    </form>
                  </div>
                    {this.props.videoComments.map(videoComments => <VideoComments key={videoComments.id} userName={videoComments.name} date={videoComments.time} comment={videoComments.comment}/>)}
            </div>
        </div>);
    }
}

// function togglePlayPause(){
//   if video.paused
// }
 
export default MainVideo;
