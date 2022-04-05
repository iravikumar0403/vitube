import axios from "axios";
import { toast } from "react-toastify";

export const addToHistory = async (video) => {
  try {
    const {
      data: { history },
    } = await axios.post("/api/user/history", { video });
    return history;
  } catch (error) {}
};

export const removeFromHistory = async (videoId) => {
  try {
    const {
      data: { history },
    } = await axios.delete(`/api/user/history/${videoId}`);
    return history;
  } catch (error) {}
};

export const clearHistory = async () => {
  try {
    const {
      data: { history },
    } = await axios.delete(`/api/user/history/all`);
    return history;
  } catch (error) {
    toast.error("Failed to clear history");
  }
};
