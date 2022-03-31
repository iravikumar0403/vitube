import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PlaylistVideoCard } from "components/PlaylistVideoCard";
import { useDocumentTitle } from "hooks";

export const PlaylistDetails = () => {
  const [playlist, setPlaylist] = useState(null);
  const { playlist_id } = useParams();
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
  }, [playlist_id]);

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
        <button className="btn icon-only text-light">
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
    </div>
  );
};
