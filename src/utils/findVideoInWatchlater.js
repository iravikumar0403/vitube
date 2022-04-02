export const findVideoInWatchlater = (videoId, watchlater) => {
  return watchlater.find((video) => video._id === videoId);
};
