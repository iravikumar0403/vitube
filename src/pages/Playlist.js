import { PlaylistCard } from "components";
import { usePlaylist } from "context/playlist-context";
import { useDocumentTitle } from "hooks";
import { Link } from "react-router-dom";

export const Playlist = () => {
  useDocumentTitle("Playlist - ViTube");
  const { playlists } = usePlaylist();

  return (
    <div className="container">
      <h2 className="text-center">All Playlist</h2>
      {playlists.length === 0 ? (
        <div className="text-center my-5">
          <span>Your created playlist will appear here. </span>
          <Link className="link" to="/explore">
            Explore videos
          </Link>
        </div>
      ) : (
        <div className="listing-grid">
          {playlists.map((playlist) => (
            <PlaylistCard key={playlist._id} playlist={playlist} />
          ))}
        </div>
      )}
    </div>
  );
};
