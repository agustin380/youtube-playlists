let itemId = 0;

export const addPlayListItem = (title, videoId, duration) => ({
  type: 'ADD_ITEM',
  id: ++itemId,
  title,
  videoId,
  duration,
});
