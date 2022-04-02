export const findVideoInPlaylist = (videoId, playlist) => {
  return playlist.videos.find((video) => video._id === videoId);
};
