import { playlist as initialState } from '../utils/initialState.js';

const setPlayingItem = (state, id) => (state.map(item => Object.assign(
  {}, item, { isPlaying: item.id === id }
)));

export const getCurrentVideo = (state) => (
  state.filter(item => item.isPlaying)[0]
);

const playlistReducer = (state = initialState, action) => {
  let playlistItem;
  let currentItemIndex;
  let nextItem;

  switch (action.type) {
    case 'ADD_ITEM':
      playlistItem = {
        id: action.id,
        title: action.title,
        videoId: action.videoId,
        duration: action.duration,
        isPlaying: false,
      };
      return [...state, playlistItem];

    case 'SET_PLAYING_ITEM':
      return setPlayingItem(state, action.id);

    case 'PLAY_NEXT_VIDEO':
      playlistItem = getCurrentVideo(state);
      if (playlistItem) {
        currentItemIndex = state.indexOf(playlistItem);
      } else {
        currentItemIndex = 0;
      }
      nextItem = state[currentItemIndex + 1];
      return setPlayingItem(state, nextItem.id);

    default:
      return state;
  }
};


export default playlistReducer;
