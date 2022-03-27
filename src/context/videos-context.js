import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
const VideosContext = createContext();

const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/videos");
      setVideos(data.videos);
    })();
  }, []);

  return (
    <VideosContext.Provider value={{ videos }}>
      {children}
    </VideosContext.Provider>
  );
};

const useVideos = () => useContext(VideosContext);
export { useVideos, VideosProvider };
