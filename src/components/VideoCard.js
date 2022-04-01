import playIcon from "asset/playIcon.svg";
import { getInitials } from "utils";
import { VideoDropdownMenu } from "./VideoDropdownMenu";

export const VideoCard = ({ video }) => {
  const { _id, title, creator, views } = video;
  return (
    <div className="card">
      <div className="card-media">
        <div className="play-icon">
          <img src={playIcon} alt="" />
        </div>
        <img
          className="img-responsive img-rounded"
          src={`https://i.ytimg.com/vi/${_id}/hq720.jpg`}
          alt="card media"
        />
      </div>
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
        <VideoDropdownMenu video={video} />
      </div>
    </div>
  );
};
