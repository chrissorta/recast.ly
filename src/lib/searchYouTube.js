
var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      part: 'snippet',
      maxResults: options.max || 5,
      type: 'video',
      videoEmbeddable: true
    },
    success: function (data) {
      console.log('YouTube API : Success');
      callback(data.items);
    },
    error: function () {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('YouTube API: Failed to retrieve');
    }
  });
};

export default searchYouTube;


