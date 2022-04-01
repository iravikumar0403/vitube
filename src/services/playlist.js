import axios from "axios";

export const removeVideoFromPlaylist = async (videoId, playlistId) => {
  try {
    const {
      data: { playlist },
    } = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`);
    return playlist;
  } catch (error) {
    console.log(error.response);
  }
};

export const addVideoToPlaylist = async (video, playlistId) => {
  try {
    const {
      data: { playlist },
    } = await axios.post(`/api/user/playlists/${playlistId}`, {
      video,
    });
    return playlist;
  } catch (error) {
    console.log(error.response);
  }
};
