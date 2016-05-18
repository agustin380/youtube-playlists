import urlParser from 'url';
import store from '../root/store.js';

import { addPlayListItem } from '../playlist/actions.js';


const playlistForm = (state = {}, action) => {
  let videoId;
  let title;
  switch (action.type) {
    case 'GET_VIDEO_INFO':
      videoId = urlParser.parse(action.url, true).query.v;
      window.gapi.client.load('youtube', 'v3').then(() =>
        window.gapi.client.youtube.videos.list({
          part: 'snippet',
          id: videoId,
        }).then(response => {
          title = response.result.items[0].snippet.title;
          store.dispatch(addPlayListItem(title, videoId));
        })
      );
      return state;
    default:
      return state;
  }
};

export default playlistForm;
