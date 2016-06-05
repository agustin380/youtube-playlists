import urlParser from 'url';
import moment from 'moment';

import store from '../root/store.js';
import { addPlayListItem } from '../playlist/actions.js';


const playlistForm = (state = {}, action) => {
  let videoId;
  let title;
  let duration;
  let minutes;
  let seconds;
  switch (action.type) {
    case 'GET_VIDEO_INFO':
      videoId = urlParser.parse(action.url, true).query.v;
      window.gapi.client.load('youtube', 'v3').then(() =>
        Promise.all([
          window.gapi.client.youtube.videos.list({
            part: 'snippet',
            id: videoId,
          }),
          window.gapi.client.youtube.videos.list({
            part: 'contentDetails',
            id: videoId,
          }),
        ]).then(responses => {
          title = responses[0].result.items[0].snippet.title;
          duration = moment.duration(responses[1].result.items[0].contentDetails.duration);
          minutes = duration.get('minutes');
          seconds = duration.get('seconds');
          store.dispatch(addPlayListItem(title, videoId, `${minutes}:${seconds}`));
        })
      );
      return state;
    default:
      return state;
  }
};

export default playlistForm;
