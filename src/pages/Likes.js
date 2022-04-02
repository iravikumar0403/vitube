import { Link } from "react-router-dom";
import { PlaylistVideoCard } from "components";
import { useDocumentTitle } from "hooks";
import { usePlaylist } from "context";

export const Likes = () => {
  const { likes } = usePlaylist();
  useDocumentTitle("Likes - ViTube");

  return (
    <div className="container">
      <div className="playlist-header">
        <div>
          <h3>Liked videos</h3> &#9679;
          <p>
            {likes.length} <span>videos</span>
          </p>
        </div>
      </div>
      <hr />
      <div className="playlist-listing">
        {likes.length > 0 ? (
          likes.map((video) => (
            <PlaylistVideoCard key={video._id} video={video} />
          ))
        ) : (
          <p className="my-5">
            You have no likes any videos yet.{" "}
            <Link to="/explore" className="link">
              Explore videos
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};
