import { Link } from "react-router-dom";
import { PlaylistVideoCard } from "components";
import { useDocumentTitle } from "hooks";
import { usePlaylist } from "context";
import { clearHistory, removeFromHistory } from "services";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

export const WatchHistory = () => {
  const { history, dispatch } = usePlaylist();
  useDocumentTitle("Vitube - Watch history");

  const deleteBtnHandler = async (id) => {
    const res = await removeFromHistory(id);
    if (res) {
      dispatch({
        type: "UPDATE_HISTORY",
        payload: res,
      });
    }
  };

  const clearHistoryHandler = async () => {
    const res = await clearHistory();
    if (res) {
      dispatch({
        type: "UPDATE_HISTORY",
        payload: res,
      });
      toast.success("Your watch history is cleared");
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
        <button
          className="btn icon-only text-light"
          title="Clear history"
          onClick={() => clearHistoryHandler()}
        >
          <MdDelete className="fs-2" />
        </button>
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
