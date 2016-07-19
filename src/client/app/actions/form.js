import moment from 'moment';

import { addPlayListItem } from './playlist.js';

export const submitPlaylistItem = (videoId) => (dispatch) => {
  const { client } = window.gapi;

  client.load('youtube', 'v3').then(() => Promise.all([
    client.youtube.videos.list({
      part: 'snippet',
      id: videoId,
    }),
    client.youtube.videos.list({
      part: 'contentDetails',
      id: videoId,
    }),
  ]).then(([snippet, contentDetails]) => {
    const title = snippet.result.items[0].snippet.title;
    const duration = moment.duration(contentDetails.result.items[0].contentDetails.duration);
    dispatch(addPlayListItem(title, videoId, duration));
  }));

  return Promise.resolve();
};
