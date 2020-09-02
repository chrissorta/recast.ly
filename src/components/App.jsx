import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

// The main component of where child components are displayed
// The main display of the App Component

console.log(exampleVideoData);
class App extends React.Component {
  constructor(props) {
    super(props);
    // super(props) assigns 'this' to props
    this.state = {
      currentVideo: exampleVideoData[1],
      videos: exampleVideoData
    };
  }

  componentDidMount() {
    let options = { key: this.props.YOUTUBE_API_KEY };
    this.props.searchYouTube(
      options, (data) =>
        this.setState({
        // console.log('data, ', data)
          videos: data

        })
    );
  }

  onVideoClick(videoFromChild) {
    // Signals a state change, data store on your client side; reset the database coing from this.state => state machine
    this.setState({
      currentVideo: videoFromChild
    });
    // console.log('click me');
  }




  render() {
    // console.log("hello")
    // console.log(this.onVideoClick.bind(this))
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em>  view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em>  <VideoPlayer video={this.state.currentVideo} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em>  <VideoList onVideoClick={this.onVideoClick.bind(this)} videos={this.state.videos} /></h5></div>
          </div>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;