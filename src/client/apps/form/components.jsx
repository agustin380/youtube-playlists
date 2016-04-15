import React from 'react';
import { setVideo } from '../player/actions.js';
import store from '../root/store.js';


export default class VideoForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const videoUrl = document.getElementsByName('video_url')[0].value;
    store.dispatch(setVideo(videoUrl));
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="video_url" placeholder="Enter a YouTube URL!" />
        <input type="submit" />
      </form>
    );
  }
}
