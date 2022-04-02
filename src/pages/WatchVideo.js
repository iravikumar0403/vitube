import { useEffect } from "react";
import { VideoPlayer } from "components/VideoPlayer";
import { useAuth, usePlaylist, useVideos } from "context";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { findItemById } from "utils/findItemById";
import { addToLikedVideos, removeFromLikedVideos } from "services";
import { addToHistory } from "services";

export const WatchVideo = () => {
  const { videoId } = useParams();
  const { videos } = useVideos();
  const { likes, dispatch } = usePlaylist();
  const video = findItemById(videoId, videos);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    (async () => {
      const res = await addToHistory(video);
      if (res) {
        dispatch({
          type: "UPDATE_HISTORY",
          payload: res,
        });
      }
    })();
  }, [dispatch, video]);

  const likeHandler = async () => {
    if (!user)
      navigate("/login", {
        state: {
          from: pathname,
        },
      });
    const res = await addToLikedVideos(video);
    res &&
      dispatch({
        type: "UPDATE_LIKES",
        payload: res,
      });
  };

  const dislikehandler = async () => {
    const res = await removeFromLikedVideos(video._id);
    res &&
      dispatch({
        type: "UPDATE_LIKES",
        payload: res,
      });
  };

  return (
    <main className="container">
      <VideoPlayer />
      <div className="video-details">
        <p className="fs-3">{video?.title}</p>
        <button className="btn">
          {findItemById(videoId, likes) ? (
            <AiFillLike
              className="fs-3 mx-2 text-primary"
              onClick={dislikehandler}
            />
          ) : (
            <AiOutlineLike className="fs-3 mx-2" onClick={likeHandler} />
          )}
        </button>
      </div>
    </main>
  );
};
