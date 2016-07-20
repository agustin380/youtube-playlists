export class YoutubeApi {
  constructor() {
    this.client = window.gapi.client;
    this.loadPromise = this.client.load('youtube', 'v3');
  }
  getVideoTitle(videoId) {
    return this.loadPromise.then(() =>
      this.client.youtube.videos.list({
        part: 'snippet',
        id: videoId,
      }).then((result) => result.result.items[0].snippet.title)
    );
  }
  getVideoDuration(videoId) {
    return this.loadPromise.then(() =>
      this.client.youtube.videos.list({
        part: 'contentDetails',
        id: videoId,
      }).then((result) => result.result.items[0].contentDetails.duration)
    );
  }
}
