import urlParser from 'url';
import { connect } from 'react-redux';

import { submitPlaylistItem } from '../actions/form.js';
import Form from '../components/form.jsx';


const mapDispatchToProps = (dispatch) => ({
  onSubmit: (event) => {
    event.preventDefault();

    const videoUrl = document.getElementsByName('video_url')[0].value;
    const videoId = urlParser.parse(videoUrl, true).query.v;
    dispatch(submitPlaylistItem(videoId));
  },
});

const VideoForm = connect(
  null,
  mapDispatchToProps
)(Form);

export default VideoForm;
