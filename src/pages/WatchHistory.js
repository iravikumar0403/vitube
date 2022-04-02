import { Link } from "react-router-dom";
import { PlaylistVideoCard } from "components";
import { useDocumentTitle } from "hooks";
import { usePlaylist } from "context";

export const WatchHistory = () => {
  const { history } = usePlaylist();
  useDocumentTitle("Watch history - ViTube");

  return (
    <div className="container">
      <div className="playlist-header">
        <div>
          <h3>Watch history</h3> &#9679;
          <p>
            {history.length} <span>videos</span>
          </p>
        </div>
      </div>
      <hr />
      <div className="playlist-listing">
        {history.length > 0 ? (
          history.map((video) => (
            <PlaylistVideoCard key={video._id} video={video} />
          ))
        ) : (
          <p className="my-5">
            Your watch history will appear here.{" "}
            <Link to="/explore" className="link">
              Explore videos
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};
