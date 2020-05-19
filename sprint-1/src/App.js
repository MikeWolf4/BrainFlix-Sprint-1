import React, { Component} from 'react';
import './App.css';
import "./styles/main.css";
import Header from "./components/Header";
import MainVideo from "./components/MainVideo";
import VideoList from "./components/VideoList";
import Footer from "./components/Footer";




class App extends Component {

  state = {
    //Main Video Object
    mainVideo: {
    id: '0',
    title: 'BMX Rampage: 2018 Highlights',
    description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
    channel: 'Red Cow',
    image: 'assets/Images/video-list-0.jpg',
    views: '1,001,023',
    likes: '110,985',
    duration: '0:20',
    video: 'assets/Video/BrainStation Sample Video.mp4',
    timestamp: '12/18/2018',
    comments: " "
    },

    // Side Video Objects
    sideVideo: [
      {
      id: '1', 
      title: 'Become A Travel Pro In One Easy Lesson', 
      channel: 'Todd Welch', 
      image: 'video-list-1.jpg' 
      },
      {
      id: '2', 
      title: 'Les Houches The Hidden Gem Of The Chamonix', 
      channel: 'Cornelia Blair', 
      image: 'video-list-2.jpg' 
      },
      {
      id: '3', 
      title: 'Travel Health Useful Medical Information For', 
      channel: 'Glen Harper', 
      image: 'video-list-3.jpg' 
      },
      {
      id: '4', 
      title: 'Cheap Airline Tickets Great Ways To Save', 
      channel: 'Emily Harper', 
      image: 'video-list-4.jpg' 
      },
      {
      id: '5', 
      title: 'Take A Romantic Break In A Boutique Hotel', 
      channel: 'Ethan Owen', 
      image: 'video-list-5.jpg' 
      },
      {
      id: '6', 
      title: 'Choose The Perfect Accommodations', 
      channel: 'Lydia Perez', 
      image: 'video-list-6.jpg' 
      },
      {
      id: '7', 
      title: 'Cruising Destination Ideas', 
      channel: 'Timothy Austin', 
      image: 'video-list-7.jpg' 
      },
      {
      id: '8', 
      title: 'Train Travel On Track For Safety', 
      channel: 'Scotty Cranmer', 
      image: 'video-list-8.jpg' 
      },
    ],

    // Main Video Comment Objects
    commentSection: [
      {
      id: 1,
      name: 'Micheal Lyon',
      comment: 'They BLEW the ROOF off at their last show, once everyone    started ﬁguring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.',
      time: "Dec 18, 2018"
    },
      {
      id: 2,
      name: 'Gary Won',
      comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!',
      time: "Dec 12, 2018"
    },
      {
      id: 3,
      name: 'Theodore Duncan',
      comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s deﬁnitely my favorite ever!',
      time: "Nov 15, 2018"
    }
    ]
  }
  render(){
  return (
    <div className="main-doc">
      <Header />
      <MainVideo videoDetails={this.state.mainVideo} videoComments={this.state.commentSection} sideVideoList={this.state.sideVideo} />
      <VideoList sideVideoList={this.state.sideVideo} />
      <Footer />
    </div>
  );
  }
}
export default App;
  