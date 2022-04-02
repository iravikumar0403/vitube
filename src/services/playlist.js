import axios from "axios";

export const createPlaylist = async (title) => {
  try {
    const {
      data: { playlists },
    } = await axios.post(`/api/user/playlists`, { playlist: { title } });
    return playlists;
  } catch (error) {
    console.log(error.response);
  }
};

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
    console.log(error.response.data.errors[0]);
  }
};

export const deletePlaylist = async (playlistId) => {
  try {
    const {
      data: { playlists },
    } = await axios.delete(`/api/user/playlists/${playlistId}`);
    return playlists;
  } catch (error) {
    console.log(error.response.data.errors[0]);
  }
};
