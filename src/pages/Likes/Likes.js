import { Link } from "react-router-dom";
import { PlaylistVideoCard } from "components";
import { useDocumentTitle } from "hooks";
import { usePlaylist } from "context";
import { removeFromLikedVideos } from "services";

export const Likes = () => {
  const { likes, dispatch } = usePlaylist();
  useDocumentTitle("Vitube - Likes");

  const deleteBtnHandler = async (id) => {
    const res = await removeFromLikedVideos(id);
    if (res) {
      dispatch({
        type: "UPDATE_LIKES",
        payload: res,
      });
    }
  };

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
            <PlaylistVideoCard
              key={video._id}
              video={video}
              deleteBtnHandler={deleteBtnHandler}
            />
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
