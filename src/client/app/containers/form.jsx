import urlParser from 'url';
import moment from 'moment';
import { connect } from 'react-redux';

import { addPlayListItem } from '../actions/playlist.js';
import Form from '../components/form.jsx';


const mapDispatchToProps = (dispatch) => ({
  onSubmit: (event) => {
    event.preventDefault();

    const videoUrl = document.getElementsByName('video_url')[0].value;
    const videoId = urlParser.parse(videoUrl, true).query.v;

    window.gapi.client.load('youtube', 'v3').then(() => Promise.all([
      window.gapi.client.youtube.videos.list({
        part: 'snippet',
        id: videoId,
      }),
      window.gapi.client.youtube.videos.list({
        part: 'contentDetails',
        id: videoId,
      }),
    ]).then(([snippet, contentDetails]) => {
      const title = snippet.result.items[0].snippet.title;
      const duration = moment.duration(contentDetails.result.items[0].contentDetails.duration);
      dispatch(addPlayListItem(title, videoId, duration));
    }));
  },
});

const VideoForm = connect(
  null,
  mapDispatchToProps
)(Form);

export default VideoForm;
