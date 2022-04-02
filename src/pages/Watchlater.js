import { Link } from "react-router-dom";
import { PlaylistVideoCard } from "components/PlaylistVideoCard";
import { useDocumentTitle } from "hooks";
import { usePlaylist } from "context";
import { removeFromWatchlater } from "services";

export const Watchlater = () => {
  const { watchlater, dispatch } = usePlaylist();
  useDocumentTitle("Watch later - ViTube");

  const deleteBtnHandler = async (id) => {
    const res = await removeFromWatchlater(id);
    if (res) {
      dispatch({
        type: "UPDATE_WATCHLATER",
        payload: res,
      });
    }
  };

  return (
    <div className="container">
      <div className="playlist-header">
        <div>
          <h3>Watch later</h3> &#9679;
          <p>
            {watchlater.length} <span>videos</span>
          </p>
        </div>
      </div>
      <hr />
      <div className="playlist-listing">
        {watchlater.length > 0 ? (
          watchlater.map((video) => (
            <PlaylistVideoCard
              key={video._id}
              video={video}
              deleteBtnHandler={deleteBtnHandler}
            />
          ))
        ) : (
          <p className="my-5">
            You have not added any videos to watch later.{" "}
            <Link to="/explore" className="link">
              Explore videos
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};
