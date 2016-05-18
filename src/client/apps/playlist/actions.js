let itemId = 0;

export const addPlayListItem = (title, videoId) => ({
  type: 'ADD_ITEM',
  id: ++itemId,
  title,
  videoId,
});
