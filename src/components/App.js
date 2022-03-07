import React from "react";
import SearchBar from "./SearchBar";
import youtube from "./apis/youtube";
import VideosList from "./VideosList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    this.handleSearchSubmit("beaches");
  }
  handleSearchSubmit = async (term) => {
    const resp = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    const rand = Math.floor(Math.random() * 5);
    this.setState({
      videos: resp.data.items,
      selectedVideo: resp.data.items[rand],
    });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar handleSearchSubmit={this.handleSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="six wide column">
              <VideosList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
