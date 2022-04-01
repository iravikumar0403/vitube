import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { PlaylistVideoCard } from "components/PlaylistVideoCard";
import { useDocumentTitle } from "hooks";
import { usePlaylist } from "context";
import axios from "axios";
import { ConfirmDeleteModal } from "components/ConfirmDeleteModal";

export const PlaylistDetails = () => {
  const [playlist, setPlaylist] = useState(null);
  const { playlist_id } = useParams();
  const { playlists } = usePlaylist();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  useDocumentTitle(!playlist ? "ViTube" : `${playlist.title} - ViTube`);

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
          className="btn text-light"
          onClick={() => setShowDeleteConfirmation(true)}
        >
          <MdDeleteForever className="fs-2" />
        </button>
      </div>
      <hr />
      <div className="playlist-listing">
        {playlist.videos.length > 0 ? (
          playlist.videos.map((video) => (
            <PlaylistVideoCard key={video._id} video={video} />
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
