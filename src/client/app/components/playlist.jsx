import React, { PropTypes } from 'react';
//import momentPropTypes from 'react-moment-proptypes';

import PlayListItem from '../components/playlistItem.jsx';


const PlayList = ({ items, onItemClick }) => (
  <div className="list-group">
    {items.map(item =>
      <PlayListItem
        key={item.id}
        {...item}
        onClick={() => onItemClick(item.id, item.videoId)}
      />
    )}
  </div>
);


PlayList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    videoId: PropTypes.string.isRequired,
    //duration: momentPropTypes.momentObj,
    isPlaying: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default PlayList;
