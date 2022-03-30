import axios from "axios";
import { useState, useEffect, useContext, createContext } from "react";
import { useAuth } from "./auth-context";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      (async () => {
        const {
          data: { playlists },
        } = await axios.get("api/user/playlists");
        console.log(playlists);
        setPlaylist(playlists);
      })();
    }
  }, [user]);

  return (
    <PlaylistContext.Provider value={{ playlist, setPlaylist }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { PlaylistProvider, usePlaylist };
