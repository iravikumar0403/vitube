import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PlaylistVideoCard } from "components/PlaylistVideoCard";

export const PlaylistListing = () => {
  const [playlist, setPlaylist] = useState(null);
  const { playlist_id } = useParams();

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
    return "loading";
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
        {playlist.videos.map((video) => (
          <PlaylistVideoCard video={video} />
        ))}
      </div>
    </div>
  );
};
