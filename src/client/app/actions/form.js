import moment from 'moment';

import { YoutubeApi } from '../utils/youtubeApi.js';
import { addPlayListItem } from './playlist.js';

export const submitPlaylistItem = (videoId) => (dispatch) => {
  const api = new YoutubeApi();

  return Promise.all([
    api.getVideoTitle(videoId),
    api.getVideoDuration(videoId),
  ]).then(([title, durationString]) => {
    const duration = moment.duration(durationString);
    dispatch(addPlayListItem(title, videoId, duration));
  });
};
