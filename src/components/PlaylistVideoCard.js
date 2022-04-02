import { getInitials } from "utils";
import playIcon from "asset/playIcon.svg";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export const PlaylistVideoCard = ({ video, deleteBtnHandler }) => {
  const { _id, title, creator, views } = video;

  return (
    <div className="card card card-horizontal playlist w-auto">
      <Link to={`/video/${video._id}`} className="card-media">
        <div className="play-icon">
          <img src={playIcon} alt="play" />
        </div>
        <img
          className="img-responsive img-rounded"
          src={`https://i.ytimg.com/vi/${_id}/hq720.jpg`}
          alt="card media"
        />
      </Link>
      <div className="card-details">
        <div className="card-body">
          <p className="card-title fs-1 m-0">
            {title.length > 50 ? title.substring(0, 50) + "..." : title}
          </p>
        </div>
        <div className="card-footer">
          <div className="flex">
            <div className="avatar avatar-xs">{getInitials(creator)}</div>
            <div>
              <p className="text-muted">{views} views</p>
            </div>
          </div>
          <button
            className="btn icon-only text-light"
            onClick={() => deleteBtnHandler(_id)}
          >
            <MdDelete className="fs-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
