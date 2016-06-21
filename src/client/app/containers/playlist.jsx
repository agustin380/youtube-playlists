import { connect } from 'react-redux';
import { setPlayingItem } from '../actions/playlist.js';
import { setVideo } from '../actions/player.js';
import PlayList from '../components/playlist.jsx';


const mapStateToProps = (state) => ({
  items: state.playlist,
});

const mapDispatchToProps = (dispatch) => ({
  onItemClick: (id, videoId) => {
    dispatch(setPlayingItem(id));
    dispatch(setVideo(videoId));
  },
});

const ActivePlayList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayList);

export default ActivePlayList;
