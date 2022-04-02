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
    if (!user) return;
    const { playlists, likes, history, watchlater } = user.user;
    dispatch({
      type: "INIT",
      payload: {
        playlists,
        likes,
        history,
        watchlater,
      },
    });
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
