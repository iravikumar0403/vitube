import axios from "axios";
import { toast } from "react-toastify";

export const addToLikedVideos = async (video) => {
  try {
    const {
      data: { likes },
    } = await axios.post("/api/user/likes", { video });
    return likes;
  } catch (error) {
    if (error.response.status === 409) {
      toast.error(error.response.data.errors[0]);
    }
  }
};

export const removeFromLikedVideos = async (videoId) => {
  try {
    const {
      data: { likes },
    } = await axios.delete(`/api/user/likes/${videoId}`);
    console.log(likes);
    return likes;
  } catch (error) {
    if (error.response.status === 409) {
      toast.error(error.response.data.errors[0]);
    }
  }
};
