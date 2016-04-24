import playlistItem from '../playlist_item/reducers.js';

const playlist = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        playlistItem(undefined, action),
      ];
    default:
      return state;
  }
};

export default playlist;
