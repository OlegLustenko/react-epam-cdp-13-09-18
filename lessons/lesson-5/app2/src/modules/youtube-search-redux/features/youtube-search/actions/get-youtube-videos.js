import {youtubeSearch} from '../../../api/youtube-search/youtube-search';
import {selectYoutubeSearchTerm} from '../../../app-store/store/application-state/youtube-search/selectors';
import {
  setSelectedVideos,
  setYoutubeVideos,
} from '../../../app-store/store/application-state/youtube-search/actions';

export const getYoutubeVideos = () => async (dispatch, getState) => {
  const term = selectYoutubeSearchTerm(getState());
  const videos = await youtubeSearch.getVideoByTerm(term);

  dispatch(setYoutubeVideos(videos));
  if (videos.length) {
    dispatch(setSelectedVideos(videos[0]));
  }
};
