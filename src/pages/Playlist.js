import { usePlaylist } from "context/playlist-context";
import { Link } from "react-router-dom";

export const Playlist = () => {
  const { playlist } = usePlaylist();

  return (
    <div className="container">
      <h2 className="text-center">All Playlist</h2>
      {playlist.length === 0 && (
        <div className="text-center my-5">
          <span>Your created playlist will appear here. </span>
          <Link className="link" to="/explore">
            Explore videos
          </Link>
        </div>
      )}
    </div>
  );
};
