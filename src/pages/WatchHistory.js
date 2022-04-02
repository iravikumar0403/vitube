import { Link } from "react-router-dom";
import { PlaylistVideoCard } from "components";
import { useDocumentTitle } from "hooks";
import { usePlaylist } from "context";
import { removeFromHistory } from "services";

export const WatchHistory = () => {
  const { history, dispatch } = usePlaylist();
  useDocumentTitle("Watch history - ViTube");

  const deleteBtnHandler = async (id) => {
    const res = await removeFromHistory(id);
    if (res) {
      dispatch({
        type: "UPDATE_HISTORY",
        payload: res,
      });
    }
  };

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
          [...history]
            .reverse()
            .map((video) => (
              <PlaylistVideoCard
                key={video._id}
                video={video}
                deleteBtnHandler={deleteBtnHandler}
              />
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
