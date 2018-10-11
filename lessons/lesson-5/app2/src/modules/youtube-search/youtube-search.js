import {debounce} from 'lodash/function';
import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const DEFAULT_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;

export function youtubeSearchCreator({localStorage, YTSearch}) {
  return class YoutubeSearch extends Component {
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
          <SearchBar onSearchTermChange={this.videoSearch}/>
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

    videoSearch = (term) => {
      const API_KEY = this.getApiKey();

      /* DI */
      YTSearch({key: API_KEY, term}, (videos) => {
        this.setState({
          videos,
          selectedVideo: videos[0],
        });
      });
    };
  };
}

export const YoutubeSearch = youtubeSearchCreator({YTSearch, localStorage});