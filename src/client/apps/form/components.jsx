import React from 'react';


export default class VideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videoUrl: 'Enter a YouTube URL!' };
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="video_url" value={this.state.videoUrl} />
        <input type="submit" />
      </form>
    );
  }
}
