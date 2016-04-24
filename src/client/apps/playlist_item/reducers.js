import urlParser from 'url';
import { fetchTitle } from './actions.js';


const playlistItem = (state = {}, action) => {
  let videoId;
  let title;
  switch (action.type) {
    case 'ADD_ITEM':
      videoId = urlParser.parse(action.url, true).query.v;
      title = fetchTitle(videoId);
      return {
        title,
        videoId,
      };
    default:
      return state;
  }
};

export default playlistItem;
