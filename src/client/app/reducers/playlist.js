const playlist = (state = [], action) => {
  let playlistItem;
  switch (action.type) {
    case 'ADD_ITEM':
      playlistItem = {
        id: action.id,
        title: action.title,
        videoId: action.videoId,
        duration: action.duration,
        isPlaying: false,
      };
      return [
        ...state,
        playlistItem,
      ];
    case 'SET_PLAYING_ITEM':
      return state.map(item => Object.assign(
        {}, item, { isPlaying: item.id === action.id }
      ));
    default:
      return state;
  }
};

export default playlist;
