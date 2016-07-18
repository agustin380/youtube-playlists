const setPlayingItem = (state, id) => (state.map(item => Object.assign(
  {}, item, { isPlaying: item.id === id }
)));

const playlistReducer = (state = [], action) => {
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
      playlistItem = state.filter(item => item.isPlaying)[0];
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
