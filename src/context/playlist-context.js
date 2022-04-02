import axios from "axios";
import { useReducer, useEffect, useContext, createContext } from "react";
import { playlistReducer } from "reducer";
import { useAuth } from "./auth-context";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const [{ playlists, watchlater, likes, history }, dispatch] = useReducer(
    playlistReducer,
    {
      playlists: [],
      watchlater: [],
      likes: [],
      history: [],
    }
  );
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      (async () => {
        const {
          data: { playlists },
        } = await axios.get("/api/user/playlists");
        dispatch({
          type: "SET_PLAYLISTS",
          payload: playlists,
        });
        const {
          data: { watchlater },
        } = await axios.get(`/api/user/watchlater`);
        dispatch({
          type: "UPDATE_WATCHLATER",
          payload: watchlater,
        });
      })();
    }
  }, [user]);

  return (
    <PlaylistContext.Provider
      value={{ playlists, watchlater, likes, history, dispatch }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { PlaylistProvider, usePlaylist };
