const playlistItem = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        id: action.id,
        title: action.title,
        videoId: action.videoId,
        duration: action.duration,
      };
    default:
      return state;
  }
};

export default playlistItem;
