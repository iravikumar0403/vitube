import { VideoPlayer } from "components/VideoPlayer";
import { usePlaylist, useVideos } from "context";
import { useParams } from "react-router-dom";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { findItemById } from "utils/findItemById";

export const WatchVideo = () => {
  const { videoId } = useParams();
  const { videos } = useVideos();
  const { likes } = usePlaylist();
  const video = findItemById(videoId, videos);
  return (
    <main className="container">
      <VideoPlayer />
      <div className="video-details">
        <p className="fs-3">
          {video?.title} {video?.title}
          {video?.title}
        </p>
        <button className="btn">
          {findItemById(videoId, likes) ? (
            <AiFillLike className="fs-3 mx-2 text-primary" />
          ) : (
            <AiOutlineLike className="fs-3 mx-2" />
          )}
        </button>
      </div>
    </main>
  );
};
