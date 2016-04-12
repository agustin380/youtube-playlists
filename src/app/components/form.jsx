import React from 'react';
import ReactDOM from 'react-dom';


export class VideoForm extends React.Component {
  render() {
    return (
      <form type="POST" action=".">
        <input type="text" name="video_url" />
        <input type="submit" />
      </form>
    );
  }
}

ReactDOM.render(<VideoForm />, document.getElementById('videoForm'));
