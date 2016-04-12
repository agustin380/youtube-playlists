import React from 'react';


export default class VideoForm extends React.Component {
  render() {
    return (
      <form type="POST" action=".">
        <input type="text" name="video_url" />
        <input type="submit" />
      </form>
    );
  }
}
