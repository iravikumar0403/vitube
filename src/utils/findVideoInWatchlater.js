export const findVideoInWatchlater = (videoId, watchlater) => {
  return watchlater.filter((video) => video._id === videoId)[0];
};
