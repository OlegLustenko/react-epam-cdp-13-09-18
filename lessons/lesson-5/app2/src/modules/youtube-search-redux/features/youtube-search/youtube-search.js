import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {
  YoutubeSearchBar,
  YoutubeList,
  YoutubeVideoDetail,
} from './components';

import {
  getYoutubeVideos,
} from './actions/get-youtube-videos';

export class YoutubeSearchReduxComponent extends Component {
  static propTypes = {
    getYoutubeVideos: PropTypes.func,
  };

  componentDidMount() {
    this.props.getYoutubeVideos();
  }

  render() {
    // const videoSearch = debounce((term) => {
    //   this.videoSearch(term);
    // }, 300);
    //
    // const {selectedVideo, videos} = this.state;

    return (
      <div>
        <YoutubeSearchBar/>

        <div className="row">
          <YoutubeVideoDetail/>
          <YoutubeList/>
        </div>
      </div>
    );
  }

  //
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     videos: [],
  //     selectedVideo: null,
  //     term: 'marvel',
  //   };
  // }
  //
  // onVideoSelect = (selectedVideo) => {
  //   this.setState({selectedVideo});
  // };
  //
  // videoSearch(term) {
  //   const API_KEY = this.getApiKey();
  //
  //   YTSearch({key: API_KEY, term: term}, (videos) => {
  //     this.setState({
  //       videos: videos,
  //       selectedVideo: videos[0],
  //     });
  //   });
  // }
}

export const YoutubeSearchRedux = connect(null, {
  getYoutubeVideos,
})(YoutubeSearchReduxComponent);
