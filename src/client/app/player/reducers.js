const player = (state = { videoId: 'iNUq-JSXvS4' }, action) => {
  switch (action.type) {
    case 'SET_VIDEO':
      return {
        videoId: action.videoId,
      };
    default:
      return state;
  }
};

export default player;
