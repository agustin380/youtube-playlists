import React, { PropTypes } from 'react';
//import momentPropTypes from 'react-moment-proptypes';


const PlayListItem = ({ title, duration, isPlaying, onClick }) => {
  const minutes = duration.get('minutes');
  const seconds = duration.get('seconds');
  const durationString = `${minutes}:${seconds}`;

  let className = 'list-group-item';
  if (isPlaying) {
    className += ' active';
  }
  return (
    <a onClick={onClick} href="#" className={className}>
      <h6 className="list-group-item-heading">{title}</h6>
      <p className="list-group-item-text">{durationString}</p>
    </a>
  );
};


PlayListItem.propTypes = {
  title: PropTypes.string,
  isPlaying: PropTypes.bool,
  //duration: momentPropTypes.momentObj,
  onClick: PropTypes.func.isRequired,
};

export default PlayListItem;
