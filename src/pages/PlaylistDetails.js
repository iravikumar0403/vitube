import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { PlaylistVideoCard } from "components/PlaylistVideoCard";
import { useDocumentTitle } from "hooks";
import { usePlaylist } from "context";
import axios from "axios";
import { ConfirmDeleteModal } from "components/ConfirmDeleteModal";
import { removeVideoFromPlaylist } from "services";
import { useTheme } from "context/theme-context";

export const PlaylistDetails = () => {
  const [playlist, setPlaylist] = useState(null);
  const { theme } = useTheme();
  const { playlist_id } = useParams();
  const { playlists, dispatch } = usePlaylist();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  useDocumentTitle(!playlist ? "Vitube" : `Vitube - ${playlist.title}`);

  const deleteBtnHandler = async (id) => {
    const res = await removeVideoFromPlaylist(id, playlist_id);
    if (res) {
      dispatch({
        type: "UPDATE_PLAYLIST",
        payload: res,
      });
    }
  };

  useEffect(() => {
    if (playlist_id) {
      (async () => {
        const {
          data: { playlist },
        } = await axios.get(`/api/user/playlists/${playlist_id}`);
        setPlaylist(playlist);
      })();
    }
  }, [playlist_id, playlists]);

  if (!playlist) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="container">
      <div className="playlist-header">
        <div>
          <h3>{playlist.title}</h3> &#9679;
          <p>
            {playlist.videos.length} <span>videos</span>
          </p>
        </div>
        <button
          className={`btn icon-only ${theme === "dark" ? "text-light" : ""}`}
          onClick={() => setShowDeleteConfirmation(true)}
        >
          <MdDeleteForever className="fs-2" />
        </button>
      </div>
      <hr />
      <div className="playlist-listing">
        {playlist.videos.length > 0 ? (
          playlist.videos.map((video) => (
            <PlaylistVideoCard
              key={video._id}
              video={video}
              deleteBtnHandler={deleteBtnHandler}
            />
          ))
        ) : (
          <p className="my-5">
            No videos added to this list.{" "}
            <Link to="/explore" className="link">
              Explore videos
            </Link>
          </p>
        )}
      </div>
      {showDeleteConfirmation && (
        <ConfirmDeleteModal
          playlist={playlist}
          setShowDeleteConfirmation={setShowDeleteConfirmation}
        />
      )}
    </div>
  );
};
