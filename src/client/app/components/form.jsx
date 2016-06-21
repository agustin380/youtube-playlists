import React from 'react';

const Form = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name="video_url" placeholder="Enter a YouTube URL!" />
    <input type="submit" />
  </form>
);

Form.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

export default Form;
