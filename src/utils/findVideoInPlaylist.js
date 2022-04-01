export const findVideoInPlaylist = (videoId, playlist) => {
  return playlist.videos.filter((video) => video._id === videoId)[0];
};
