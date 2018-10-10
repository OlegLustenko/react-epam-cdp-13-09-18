import {debounce} from 'lodash/function';
import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const DEFAULT_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;

export class YoutubeSearch extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      term: 'marvel',
    };
  }

  componentDidMount() {
    this.videoSearch(this.state.term);
  }

  videoSearchDEBOUNCED = debounce((term) => {
    this.videoSearch(term);
  }, 300);

  render() {
    const {
      selectedVideo,
      videos,
    } = this.state;

    return (
      <div>
        <SearchBar onSearchTermChange={this.videoSearchDEBOUNCED}/>
        <div className="row">
          <VideoDetail videos={selectedVideo}/>
          <VideoList onVideoSelect={this.onVideoSelect} videos={videos}/>
        </div>
      </div>
    );
  }

  onVideoSelect = (selectedVideo) => {
    this.setState({selectedVideo});
  };

  getApiKey() {
    return localStorage.getItem('api_key') || DEFAULT_KEY;
  }

  videoSearch(term) {
    const API_KEY = this.getApiKey();

    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }
};

