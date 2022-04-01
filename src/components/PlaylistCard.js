import { Link } from "react-router-dom";
import { RiPlayListLine } from "react-icons/ri";

export const PlaylistCard = ({ playlist }) => {
  return (
    <div className="card card-horizontal playlist">
      <div className="card-media">
        <img
          className="img-responsive img-rounded"
          src={
            playlist.videos[0]?._id
              ? `https://i.ytimg.com/vi/${playlist.videos[0]._id}/hq720.jpg`
              : "https://media.istockphoto.com/photos/blue-mesh-gradient-blurred-motion-abstract-background-picture-id1185747322?k=20&m=1185747322&s=612x612&w=0&h=Sy7s4nSTKEbDFY1HRAijhMJVRZd4_9rACOOjkkNa5bs="
          }
          alt={playlist.title}
        />
        <div className="playlist-thumbnail">
          <div className="playlist-icon">
            <p className="fs-1">{playlist.videos.length}</p>
            <RiPlayListLine />
          </div>
        </div>
      </div>
      <div className="card-details">
        <div className="card-body">
          <p className="card-title fs-1">
            {playlist.title.length > 30
              ? playlist.title.substring(0, 30) + "..."
              : playlist.title}
          </p>
        </div>
        <div className="card-footer">
          <Link
            className="btn primary outlined playlist-btn"
            to={`/playlist/${playlist._id}`}
          >
            View Playlist
          </Link>
        </div>
      </div>
    </div>
  );
};
