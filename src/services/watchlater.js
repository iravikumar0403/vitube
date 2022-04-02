import axios from "axios";
import { toast } from "react-toastify";

export const addToWatchLater = async (video) => {
  try {
    const {
      data: { watchlater },
    } = await axios.post("/api/user/watchlater", { video });
    return watchlater;
  } catch (error) {
    if (error.response.status === 409) {
      toast.error(error.response.data.errors[0]);
    }
  }
};

export const removeFromWatchlater = async (videoId) => {
  try {
    const {
      data: { watchlater },
    } = await axios.delete(`/api/user/watchlater/${videoId}`);
    return watchlater;
  } catch (error) {
    if (error.response.status === 409) {
      toast.error(error.response.data.errors[0]);
    }
  }
};
